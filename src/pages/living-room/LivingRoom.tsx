import { ProductList } from "@/components/ui";
import { livingRoomData } from "./data";

const LivingRoom = () => {
  return (
    <>
      <ProductList productData={livingRoomData} />
    </>
  );
};

export default LivingRoom;
