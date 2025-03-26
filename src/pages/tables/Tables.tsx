import { ProductList } from "@/components/ui";
import { allData } from "@/data/allData";

const Tables = () => {
  return (
    <>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Tables",
        )}
      />
    </>
  );
};

export default Tables;
