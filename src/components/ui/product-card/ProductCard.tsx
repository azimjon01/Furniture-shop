import share from "../../../assets/icons/share.svg";
import heart from "../../../assets/icons/heart.svg";
import heartRed from "../../../assets/icons/heart-red.svg";
import { ProductCardProps } from "./ProductCard.types";
import {
  Button,
  ButtonContainer,
  Card,
  DescriptionProduct,
  DiscountBadge,
  HeartContainer,
  HeartIcon,
  HeartText,
  Image,
  Info,
  Information,
  InformationCard,
  InformationContainer,
  NewBadge,
  NewPrice,
  OldPrice,
  Overlay,
  Price,
  ShareContainer,
  ShareIcon,
  ShareText,
  Title,
} from "./ProductCard.styles";
import { useCartStore } from "@/components/store/useLikesStore";
import React from "react";

const ProductCard: React.FC<
  ProductCardProps & { children?: React.ReactNode }
> = ({
  id,
  image,
  title,
  description,
  price,
  oldPrice,
  discount,
  isNew,
  children,
}) => {
  // const [isLiked, SetIsLiked] = useState(false);
  const { likedItems, toggleLike } = useCartStore();
  const isLiked = likedItems.includes(id);
  const { addToCart } = useCartStore();
  return (
    <Card>
      <Image src={image} alt={title} />
      {discount && <DiscountBadge>-{discount}</DiscountBadge>}
      {isNew && <NewBadge>New</NewBadge>}
      <Overlay className="overlay">
        <ButtonContainer>
          {children}
          <Button
            onClick={() =>
              addToCart({
                id,
                image,
                title,
                description,
                price,
                oldPrice,
                discount,
                isNew,
              })
            }
          >
            Add to cart
          </Button>
          <InformationContainer>
            <ShareContainer>
              <ShareIcon src={share} alt="Share Icon" />
              <ShareText>Share</ShareText>
            </ShareContainer>
            <HeartContainer>
              <HeartIcon
                src={isLiked ? heartRed : heart}
                alt="Heart Icon"
                onClick={() => toggleLike(id)}
              />
              <HeartText>Like</HeartText>
            </HeartContainer>
          </InformationContainer>
        </ButtonContainer>
      </Overlay>
      <InformationCard>
        <Information>
          <Info>
            <Title>{title}</Title>
            <DescriptionProduct>{description}</DescriptionProduct>
          </Info>
          <Price>
            <NewPrice>{price}</NewPrice>
            {oldPrice && <OldPrice>{oldPrice}</OldPrice>}
          </Price>
        </Information>
      </InformationCard>
    </Card>
  );
};

export default ProductCard;
