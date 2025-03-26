import { ProductList } from "@/components/ui";
import { allData } from "@/data/allData";

const Badroom = () => {
  return (
    <>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Bedrooms",
        )}
      />
    </>
  );
};

export default Badroom;
