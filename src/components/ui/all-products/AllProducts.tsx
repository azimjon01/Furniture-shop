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

// <S.Container>
//   <S.Title>All Products</S.Title>
//   <S.ProductsWrapper>
//     <S.Category>
//       <S.CategoryTitle>
//         Chairs <S.Count>{allData.chairs.products.length}</S.Count>
//       </S.CategoryTitle>
//       {allData.chairs.products.map((product) => (
//         <LikeProductCard key={product.id} product={product} />
//       ))}
//     </S.Category>

//     <S.Category>
//       <S.CategoryTitle>
//         Tables <S.Count>{allData.tables.products.length}</S.Count>
//       </S.CategoryTitle>
//       {allData.tables.products.map((product) => (
//         <LikeProductCard key={product.id} product={product} />
//       ))}
//     </S.Category>

//     <S.Category>
//       <S.CategoryTitle>
//         Sofas <S.Count>{allData.sofas.products.length}</S.Count>
//       </S.CategoryTitle>
//       {allData.sofas.products.map((product) => (
//         <LikeProductCard key={product.id} product={product} />
//       ))}
//     </S.Category>

//     <S.Category>
//       <S.CategoryTitle>
//         Living Room <S.Count>{allData.livingRoom.products.length}</S.Count>
//       </S.CategoryTitle>
//       {allData.livingRoom.products.map((product) => (
//         <LikeProductCard key={product.id} product={product} />
//       ))}
//     </S.Category>

//     <S.Category>
//       <S.CategoryTitle>
//         Bedroom <S.Count>{allData.bedroomData.products.length}</S.Count>
//       </S.CategoryTitle>
//       {allData.bedroomData.products.map((product) => (
//         <LikeProductCard key={product.id} product={product} />
//       ))}
//     </S.Category>

//     <S.Category>
//       <S.CategoryTitle>
//         Office <S.Count>{allData.officeData.products.length}</S.Count>
//       </S.CategoryTitle>
//       {allData.officeData.products.map((product) => (
//         <LikeProductCard key={product.id} product={product} />
//       ))}
//     </S.Category>
//   </S.ProductsWrapper>
// </S.Container>
