import { ProductList } from "@/components/ui";
import { bedroomData } from "./data";

const Badroom = () => {
  return (
    <>
      <ProductList productData={bedroomData} />
    </>
  );
};

export default Badroom;
