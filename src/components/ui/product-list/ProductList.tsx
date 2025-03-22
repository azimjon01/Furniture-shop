import { useState } from "react";
import {
  BigConatiner,
  Grid,
  ProductsTitle,
  ShowMore,
} from "./ProductList.styles";
import { productData } from "./ProductList.data";
import ProductCard from "../product-card";

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
