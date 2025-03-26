import { ProductList } from "@/components/ui";
import { sofaData } from "./data";

const Sofas = () => {
  return (
    <>
      <ProductList productData={sofaData} />
    </>
  );
};

export default Sofas;
