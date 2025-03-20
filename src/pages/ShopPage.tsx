import Carousel from "@/components/ui/carousel/Carousel";
import FeaturesSection from "../components/ui/FeaturesSection";
import ProductList from "../components/ui/ProductList";
import Slider from "../components/ui/Slider";
import TipsTricks from "@/components/ui/tips-tricks/TipsTricks";
import { FuniroGallery } from "@/components/ui/FuniroGalery";

const ShopPage = () => {
  return (
    <>
      <Slider />
      <FeaturesSection />
      <ProductList />
      <Carousel />
      <TipsTricks />
      <FuniroGallery />
    </>
  );
};

export default ShopPage;
