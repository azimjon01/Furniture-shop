import { useCartStore } from "@/components/store/useLikesStore";
import { ProductCard } from "@/components/ui";
import styled from "@emotion/styled";
import { useState } from "react";

const Button = styled.button({
  padding: "10px 15px",
  cursor: "pointer",
  background: "#E89F71",
  color: "white",
  fontWeight: "bold",
});

const RemoveButton = styled.button({
  position: "absolute",
  background: "#fff",
  border: "none",
  color: "#E89F71",
  bottom: 20,
  padding: "10px 15px",
  cursor: "pointer",
  "&:hover": {
    background: "red",
    color: "#fff",
  },
});

const TotalContainer = styled.div({
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
  background: "#fff",
  padding: "10px 16px",
});

const Total = styled.h3({
  fontSize: "30px",
  margin: 0,
});

const CounterButton = styled.button({
  padding: "5px 20px",
  fontSize: "18px",
  border: "none",
  borderRadius: "5px",
  background: "#E89F71",
  color: "#fff",
  cursor: "pointer",
  "&:hover": {
    background: "#d87e5a",
  },
});

const BigContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30px",
  marginBottom: "40px",
});

const Grid = styled.div({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
  gap: "15px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
});

const ProductsTitle = styled.h1({
  color: "#3A3A3A",
  fontWeight: 700,
  fontSize: "38px",
  marginBottom: 0,
});

const ShowMore = styled.button({
  width: "230px",
  height: "45px",
  border: "1px solid #E89F71",
  padding: "10px 20px",
  cursor: "pointer",
  color: "#E89F71",
  fontWeight: "bold",
  fontSize: "15px",
  background: "#fff",
  "&:hover": {
    background: "#E89F71",
    color: "#fff",
  },
});

const Products = () => {
  const {
    items,
    removeFromCart,
    clearCart,
    increaseQuantity,
    decreaseQuantity,
  } = useCartStore();
  const [visibleProducts, setVisibleProducts] = useState(8);

  // ✅ Umumiy narxni hisoblash
  const totalPrice = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

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
                  {/* ✅ quantities[item.id] o‘rniga item.quantity ishlatilmoqda */}
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
          <Button onClick={clearCart}>Checkout</Button>
        </>
      )}
    </BigContainer>
  );
};

export default Products;
