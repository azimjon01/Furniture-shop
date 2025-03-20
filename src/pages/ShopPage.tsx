import Carousel from "@/components/ui/carousel/Carousel";
import FeaturesSection from "../components/ui/FeaturesSection";
import ProductList from "../components/ui/ProductList";
import Slider from "../components/ui/Slider";
import TipsTricks from "@/components/ui/tips-tricks/TipsTricks";

const ShopPage = () => {
  return (
    <>
      <Slider />
      <FeaturesSection />
      <ProductList />
      <Carousel />
      <TipsTricks />
    </>
  );
};

export default ShopPage;
