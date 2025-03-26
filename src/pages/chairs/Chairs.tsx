import { ProductList } from "@/components/ui";
import { chairData } from "./data";

const Chairs = () => {
  return (
    <>
      <ProductList productData={chairData} />
    </>
  );
};

export default Chairs;
