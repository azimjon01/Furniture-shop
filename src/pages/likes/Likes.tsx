import { AllProducts } from "@/components/ui/AllProducts";
import { LikedProducts } from "@/components/ui/LikedProducts";

const LikedPage = () => {
  return (
    <div>
      <h1>Products & Liked Items</h1>
      <LikedProducts />
      <AllProducts />
    </div>
  );
};

export default LikedPage;
