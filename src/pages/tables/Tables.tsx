import { ProductList } from "@/components/ui";
import { tableData } from "./data";

const Tables = () => {
  return (
    <>
      <ProductList productData={tableData} />
    </>
  );
};

export default Tables;
