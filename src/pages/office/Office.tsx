import { ProductList } from "@/components/ui";
import { allData } from "@/data/allData";

const Office = () => {
  return (
    <>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Office",
        )}
      />
    </>
  );
};

export default Office;
