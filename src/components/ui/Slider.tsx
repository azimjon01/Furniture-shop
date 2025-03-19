import styled from "@emotion/styled";
import img1 from "../../assets/images/slider-one.png";
import img2 from "../../assets/images/slider-two.png";
import img3 from "../../assets/images/slider-three.jpeg";
import img4 from "../../assets/images/slider-four.png";
import prevIcon from "../../assets/icons/prevIcon.svg";
import nextIcon from "../../assets/icons/nextIcon.svg";
import informationRight from "../../assets/icons/informationRight.svg";
import { useCallback, useEffect, useState } from "react";

// const images = [img1, img2, img3, img4];

const imagesAll = [
  {
    img: img1,
    title: "Big And Luxury Sofa For You",
    description:
      "Experience the ultimate comfort with our premium luxury sofa. Made from high-quality materials with a sleek, modern design.",
    smallTitle: "Comfort & Elegance",
    subtitle: "Modern Design",
    price: "$1,499",
  },
  {
    img: img2,
    title: "Classic Wooden Dining Set",
    description:
      "A beautifully crafted wooden dining set that brings a touch of elegance to your home. Spacious and durable.",
    smallTitle: "Perfect for Family Gatherings",
    subtitle: "Vintage Style",
    price: "$899",
  },
  {
    img: img3,
    title: "Minimalist Office Chair",
    description:
      "An ergonomic office chair designed to provide maximum support and style. Perfect for long working hours.",
    smallTitle: "Designed for Comfort",
    subtitle: "Ergonomic & Stylish",
    price: "$299",
  },
  {
    img: img4,
    title: "Modern Bedroom Set",
    description:
      "A complete bedroom set featuring a comfortable bed, nightstands, and a stylish wardrobe. Perfect for a modern lifestyle.",
    smallTitle: "High-Quality Materials",
    subtitle: "Luxury Sleeping Experience",
    price: "$2,199",
  },
];

const SliderContainer = styled.div({
  position: "relative",
  height: "80vh",
  marginTop: "3.59vh",
});

const ShopNowCard = styled.div({
  position: "absolute",
  display: "flex",
  width: "33.68vw",
  height: "71.48vh",
  background: "#fff",
  zIndex: 1,
  top: "-10px",
  left: 95,
  justifyContent: "center",
  alignItems: "center",
});

const ShopNow = styled.div({
  width: "27.38vw",
  height: "56.38vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
});

const ShopNowTitle = styled.h1({
  // width: "27.38vw",
  // height: "26.17vh",
  fontWeight: 700,
  fontSize: 50,
  lineHeight: "120%",
  letterSpacing: "0%",
  color: "#3A3A3A",
});

const ShopNowText = styled.p({
  // width: "26.13vw",
  // height: "11.72vh",
  marginTop: "16px",
  marginRight: "17px",
  fontWeight: 500,
  fontSize: 18,
  lineHeight: "150%",
  letterSpacing: "0%",
});

const ShopNowButton = styled.button({
  width: "27.37vw",
  height: "10.16vh",
  marginTop: "6.25vh",
  fontWeight: 600,
  fontSize: 18,
  border: "none",
  lineHeight: "150%",
  letterSpacing: "0%",
  background: "#E89F71",
  color: "#fff",
  cursor: "pointer",
});

const InformationCard = styled.div({
  position: "absolute",
  bottom: "5.21vh",
  right: "6.88vw",
  // width: "21.52vw",
  // height: "19.27vh",
  color: "#FFFFFFB8",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  zIndex: 3,
  background: "#FFFFFFB8",
  padding: 23,
  cursor: "pointer",
});

const InformationCardInformation = styled.div({
  // width: "12.08vw",
  // height: "13.02vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "start",
});

const InformationPriceBox = styled.div({
  display: "flex",
  alignItems: "flex-end",
  width: 23,
  height: "13.02vh",
});

const InformationCardPrice = styled.h2({
  color: "#3A3A3A",
  fontWeight: 600,
  fontSize: 19,
  lineHeight: "150%",
  letterSpacing: "0%",
});

const InformationRight = styled.img({
  width: 23,
  height: 23,
  cursor: "pointer",
});

const InformationCardTitle = styled.h1({
  color: "#3A3A3A",
  fontWeight: 600,
  fontSize: 27,
  lineHeight: "120%",
  letterSpacing: "0%",
});

const InformationCardText = styled.p({
  color: "#616161",
  fontWeight: 500,
  fontSize: 16,
  lineHeight: "150%",
  letterSpacing: "0%",
});

const SliderWrapper = styled.div({
  position: "absolute",
  width: "100%",
  bottom: 0,
  right: "4.88vw",
  maxWidth: "65vw",
  height: "71vh",
  gap: 10,
  overflow: "hidden",
  borderRadius: 10,
  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
});

const SlidesContainer = styled.div<{ index: number }>(({ index }) => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${index * 100}%)`,
}));

const Slide = styled.div({
  minWidth: "100%",
  height: "100%",
});

const SlideImage = styled.img({
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

const Buttons = styled.div({
  position: "absolute",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  right: "4.88vw",
  width: "7.61vw",
  height: "4.69vh",
});

const Button = styled.button({
  width: 46,
  height: 46,
  border: "none",
  cursor: "pointer",
  borderRadius: "50%",
  "&:hover": {
    background: "",
  },
});

const PrevButton = styled(Button)({
  background: "#E89F7150",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const NextButton = styled(Button)({
  background: "#E89F71",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const PrevNextIcon = styled.img({
  width: 24,
  height: 24,
});

const Pagination = styled.div({
  position: "absolute",
  width: "8.79vw",
  height: "2.99vh",
  gap: 12,
  marginLeft: "45.83vw",
  display: "flex",
});

const DotContainer = styled.div<{ active: boolean }>(({ active }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 20,
  height: 20,
  border: active ? "1px solid #E89F71" : "",
  borderRadius: "50%",
}));

const Dot = styled.span<{ active: boolean }>(({ active }) => ({
  width: 8,
  height: 8,
  background: active ? "#E89F71" : "#D8D8D8",
  borderRadius: "100%",
  cursor: "pointer",
  transition: "background 0.3s",
  outline: active ? "1px solid #E89F71" : "none",
}));

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % imagesAll.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + imagesAll.length) % imagesAll.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <SliderContainer>
      <ShopNowCard>
        <ShopNow>
          <ShopNowTitle>{imagesAll[currentIndex].title}</ShopNowTitle>
          <ShopNowText>{imagesAll[currentIndex].description}</ShopNowText>
          <ShopNowButton>Shop Now</ShopNowButton>
        </ShopNow>
      </ShopNowCard>
      <InformationCard>
        <InformationCardInformation>
          <InformationCardTitle>
            {imagesAll[currentIndex].smallTitle}
          </InformationCardTitle>
          <InformationCardText>
            {imagesAll[currentIndex].subtitle}
          </InformationCardText>
          <InformationCardPrice>
            ${imagesAll[currentIndex].price}
          </InformationCardPrice>
        </InformationCardInformation>
        <InformationPriceBox>
          <InformationRight src={informationRight} alt="Information" />
        </InformationPriceBox>
      </InformationCard>
      <Pagination>
        {imagesAll.map((_, index) => (
          <DotContainer
            key={index}
            active={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          >
            <Dot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          </DotContainer>
        ))}
      </Pagination>
      <Buttons>
        <PrevButton onClick={prevSlide}>
          <PrevNextIcon src={prevIcon} />
        </PrevButton>
        <NextButton onClick={nextSlide}>
          <PrevNextIcon src={nextIcon} />
        </NextButton>
      </Buttons>
      <SliderWrapper>
        <SlidesContainer index={currentIndex}>
          {imagesAll.map((img, index) => (
            <Slide key={index}>
              <SlideImage src={img.img} alt={`Slide ${index + 1}`} />
            </Slide>
          ))}
        </SlidesContainer>
      </SliderWrapper>
    </SliderContainer>
  );
};

export default Slider;
