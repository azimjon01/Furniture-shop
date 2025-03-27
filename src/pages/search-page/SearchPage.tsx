import { useLocation } from "react-router-dom";
import { allData } from "@/data/allData";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  const allProducts = allData.categories.flatMap((cat) => cat.products);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase()),
  );

  const searchData = {
    category: "Search Results",
    bigTitle: `Results for "${query}"`,
    products: filteredProducts,
  };

  return <ProductList productData={searchData} />;
};

export default SearchPage;
