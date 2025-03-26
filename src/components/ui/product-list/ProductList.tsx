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
  productData?: {
    bigTitle: string;
    products: Product[];
  };
}

const ProductList: React.FC<ProductListProps> = ({ productData }) => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  if (
    !productData ||
    !Array.isArray(productData.products) ||
    productData.products.length === 0
  ) {
    return <p>Mahsulotlar yo'q</p>;
  }

  return (
    <BigConatiner>
      <ProductsTitle>{productData.bigTitle}</ProductsTitle>
      <Grid>
        {productData.products.slice(0, visibleProducts).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </Grid>
      {visibleProducts < productData.products.length && (
        <ShowMore
          onClick={() =>
            setVisibleProducts((prev) =>
              Math.min(prev + 8, productData.products.length),
            )
          }
        >
          Show More
        </ShowMore>
      )}
    </BigConatiner>
  );
};

export default ProductList;
