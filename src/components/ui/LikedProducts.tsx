import { useCartStore } from "../store/useLikesStore";
import { allData } from "@/data/allData";
import ProductCard from "./product-card";
import styled from "@emotion/styled";
import { useState } from "react";

const BigConatiner = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30.35px",
  marginBottom: "41.72px",
});

const ProductsTitle = styled.h1({
  color: "#3A3A3A",
  fontWeight: 700,
  fontSize: 37.97,
  lineHeight: "120%",
  letterSpacing: "0%",
  marginBottom: 0,
});

const Grid = styled.div({
  position: "relative",
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill,minmax(250px,1fr))",
  gap: "15.35px",
  width: "100%",
  maxWidth: "1200px",
  margin: "0 auto",
  justifyContent: "center",
});

const ShowMore = styled.button({
  width: "232.41px",
  height: "45.51px",
  border: "1px solid #E89F71",
  padding: "10px 20px",
  cursor: "pointer",
  color: "#E89F71",
  fontWeight: 569.03,
  fontSize: 15.17,
  background: "#fff",
  "&:hover": {
    background: "#E89F71",
    color: "#fff",
  },
});

export const LikedProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);
  const { likedItems } = useCartStore();

  // Barcha mahsulotlarni olish va category qo'shish
  const likedProducts = allData.categories
    .flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        category: category.category, // Kategoriya nomini qo'shamiz
      })),
    )
    .filter((item) => likedItems.includes(item.id)); // Faqat yoqilgan mahsulotlarni qoldiramiz

  if (likedProducts.length === 0) {
    return <p>You haven't liked any inspirations yet.</p>;
  }

  return (
    <BigConatiner>
      <ProductsTitle style={{ textAlign: "center" }}>
        Liked Products
      </ProductsTitle>
      <Grid>
        {likedProducts.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
      {visibleProducts < likedProducts.length && (
        <ShowMore
          onClick={() =>
            setVisibleProducts((prev) =>
              Math.min(prev + 8, likedProducts.length),
            )
          }
        >
          Show More
        </ShowMore>
      )}
    </BigConatiner>
  );
};
