import { ProductList } from "@/components/ui";
import { allData } from "@/data/allData";

const LivingRoom = () => {
  return (
    <>
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "Living rooms",
        )}
      />
    </>
  );
};

export default LivingRoom;
