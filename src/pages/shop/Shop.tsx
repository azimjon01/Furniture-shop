import Carousel from "@/components/ui/carousel/Carousel";
import FeaturesSection from "@/components/ui/FeaturesSection";
import TipsTricks from "@/components/ui/tips-tricks/TipsTricks";
import { ProductList, Slider } from "@/components/ui";
import FuniroGallery from "@/components/ui/funiro-galery";

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
