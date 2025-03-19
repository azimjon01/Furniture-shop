import { useState } from "react";
import ProductCard from "./ProductCard";
import styled from "@emotion/styled";
import img1 from "../../assets/images/productsOne.png";
import img2 from "../../assets/images/productsTwo.png";
import img3 from "../../assets/images/productsThree.png";
import img4 from "../../assets/images/productsFour.png";
import img5 from "../../assets/images/productsFive.png";
import img6 from "../../assets/images/productsSix.png";
import img7 from "../../assets/images/productsSeven.png";
import img8 from "../../assets/images/productsEight.png";

const BigConatiner = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "30.35px",
  marginTop: "83.48px",
  marginBottom: "41.72px",
  // background: "green",
});

const Grid = styled.div({
  position: "relative",
  // width: "85.83vw",
  // minHeight: "133.83vh",
  // display: "grid",
  // gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  display: "flex",
  // flexDirection: "column",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  gap: "15.35px",
  // padding: "70.35px 0",
  // background: "blue",
});

const ProductsTitle = styled.h1({
  // position: "absolute",
  // left: "50%",
  // transform: "translate(-50%)",
  color: "#3A3A3A",
  fontWeight: 700,
  fontSize: 37.97,
  lineHeight: "120%",
  letterSpacing: "0%",
  marginBottom: 0,
  // background: "red",
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
  // position: "absolute",
  // left: "50%",
  // bottom: 0,
  // transform: "translate(-50%)",
  "&:hover": {
    background: "#E89F71",
    color: "#fff",
  },
});

const productData = [
  {
    image: img1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
  },
  {
    image: img2,
    title: "Leviosa",
    description: "Stylish cofe chair",
    price: "Rp 2.500.000",
  },
  {
    image: img3,
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
  },
  {
    image: img4,
    title: "Respira",
    description: "Minimalist fan",
    price: "Rp 500.000",
    isNew: true,
  },
  {
    image: img5,
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 7.000.000",
  },
  {
    image: img6,
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    isNew: true,
  },
  {
    image: img7,
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
  },
  {
    image: img8,
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    isNew: true,
  },
  {
    image: img1,
    title: "Syltherine",
    description: "Stylish cafe chair",
    price: "Rp 2.500.000",
    oldPrice: "Rp 3.500.000",
    discount: "30%",
  },
  {
    image: img2,
    title: "Leviosa",
    description: "Stylish cofe chair",
    price: "Rp 2.500.000",
  },
  {
    image: img3,
    title: "Lolito",
    description: "Luxury big sofa",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
  },
  {
    image: img4,
    title: "Respira",
    description: "Minimalist fan",
    price: "Rp 500.000",
    isNew: true,
  },
  {
    image: img5,
    title: "Grifo",
    description: "Night lamp",
    price: "Rp 7.000.000",
  },
  {
    image: img6,
    title: "Muggo",
    description: "Small mug",
    price: "Rp 150.000",
    isNew: true,
  },
  {
    image: img7,
    title: "Pingky",
    description: "Cute bed set",
    price: "Rp 7.000.000",
    oldPrice: "Rp 14.000.000",
    discount: "50%",
  },
  {
    image: img8,
    title: "Potty",
    description: "Minimalist flower pot",
    price: "Rp 500.000",
    isNew: true,
  },
];

const ProductList = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  return (
    <BigConatiner>
      <ProductsTitle>Our Products</ProductsTitle>
      <Grid>
        {productData.slice(0, visibleProducts).map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </Grid>
      {visibleProducts < productData.length && (
        <ShowMore onClick={() => setVisibleProducts((prev) => prev + 8)}>
          Show More
        </ShowMore>
      )}
    </BigConatiner>
  );
};

export default ProductList;
