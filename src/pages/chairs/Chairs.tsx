import { ProductList } from "@/components/ui";
import { allData } from "@/data/allData";

const Chairs = () => {
  return (
    <>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Chairs",
        )}
      />
    </>
  );
};

export default Chairs;
