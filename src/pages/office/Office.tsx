import { ProductList } from "@/components/ui";
import { officeData } from "./data";

const Office = () => {
  return (
    <>
      <ProductList productData={officeData} />
    </>
  );
};

export default Office;
