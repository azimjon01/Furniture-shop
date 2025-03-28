import { allData } from "../../../data/allData";
import ProductList from "../product-list";
import * as S from "./AllProducts.styles";

const AllProducts = () => {
  return (
    <>
      <S.Title>All Products</S.Title>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Chairs",
        )}
      />
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Tables",
        )}
      />
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Sofas",
        )}
      />
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Living Rooms",
        )}
      />
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Bedrooms",
        )}
      />
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Office",
        )}
      />
    </>
  );
};

export default AllProducts;
