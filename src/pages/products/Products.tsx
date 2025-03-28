import { useCartStore } from "@/components/store/useLikesStore";
import { ProductCard } from "@/components/ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BigContainer,
  Button,
  ButtonsContainer,
  CounterButton,
  Grid,
  ProductsTitle,
  RemoveButton,
  ShowMore,
  Total,
  TotalContainer,
} from "./Products.styles";

const Products = () => {
  const {
    items,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  const [visibleProducts, setVisibleProducts] = useState(8);

  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const navigate = useNavigate();
  return (
    <BigContainer>
      <ProductsTitle>Shopping Cart</ProductsTitle>
      {items.length === 0 ? (
        <p style={{ textAlign: "center", color: "#777" }}>
          Your cart is empty.
        </p>
      ) : (
        <>
          <Grid>
            {items.slice(0, visibleProducts).map((item) => (
              <ProductCard key={item.id} {...item}>
                <RemoveButton onClick={() => removeFromCart(item.id)}>
                  Remove
                </RemoveButton>
                <TotalContainer>
                  <CounterButton onClick={() => decreaseQuantity(item.id)}>
                    -
                  </CounterButton>
                  <Total>{item.quantity}</Total>{" "}
                  <CounterButton onClick={() => increaseQuantity(item.id)}>
                    +
                  </CounterButton>
                </TotalContainer>
              </ProductCard>
            ))}
          </Grid>

          {visibleProducts < items.length && (
            <ShowMore
              onClick={() =>
                setVisibleProducts((prev) => Math.min(prev + 8, items.length))
              }
            >
              Show More
            </ShowMore>
          )}
          <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          <ButtonsContainer>
            <Button onClick={clearCart}>Clear</Button>
            <Button onClick={() => navigate("/checkout")}>Buy Now</Button>
          </ButtonsContainer>
        </>
      )}
    </BigContainer>
  );
};

export default Products;
