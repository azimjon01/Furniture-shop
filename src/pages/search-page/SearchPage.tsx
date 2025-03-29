import { useLocation } from "react-router-dom";
import { allData } from "@/data/allData";
import { ProductList } from "@/components/ui";
import { Product } from "@/components/ui/product-list/type";

const SearchPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get("q") || "";

  const allProducts: Product[] = allData.categories.flatMap(
    (cat) => cat.products as Product[],
  );

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
