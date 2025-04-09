import { ProductList } from "@/components/ui";
import { allData } from "@/data/allData";

const Sofas = () => {
  return (
    <>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Sofas",
        )}
      />
    </>
  );
};

export default Sofas;
