import Carousel from "@/components/ui/carousel/Carousel";
import FeaturesSection from "../components/ui/FeaturesSection";
import ProductList from "../components/ui/ProductList";
import Slider from "../components/ui/Slider";

const ShopPage = () => {
  return (
    <>
      <Slider />
      <FeaturesSection />
      <ProductList />
      <Carousel />
    </>
  );
};

export default ShopPage;
