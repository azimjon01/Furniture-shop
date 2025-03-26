import React, { useState } from "react";
import {
  BigConatiner,
  Grid,
  ProductsTitle,
  ShowMore,
} from "./ProductList.styles";
import ProductCard from "../product-card";
import { Product } from "./type";

interface ProductListProps {
  productData?: Product[];
}

const ProductList: React.FC<ProductListProps> = ({ productData = [] }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  if (!Array.isArray(productData) || productData.length === 0) {
    return <p>Mahsulotlar yo'q</p>;
  }

  return (
    <BigConatiner>
      <ProductsTitle>Our Products</ProductsTitle>
      <Grid>
        {productData.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
      {visibleProducts < productData.length && (
        <ShowMore
          onClick={() =>
            setVisibleProducts((prev) => Math.min(prev + 8, productData.length))
          }
        >
          Show More
        </ShowMore>
      )}
    </BigConatiner>
  );
};

export default ProductList;
