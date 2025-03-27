import Carousel from "@/components/ui/carousel/Carousel";
import FeaturesSection from "@/components/ui/FeaturesSection";
import TipsTricks from "@/components/ui/tips-tricks/TipsTricks";
import { ProductList, Slider } from "@/components/ui";
import FuniroGallery from "@/components/ui/funiro-galery";
import { allData } from "@/data/allData";
// import { productData } from "@/components/ui/product-list/ProductList.data";

const ShopPage = () => {
  return (
    <>
      <Slider />
      <FeaturesSection />
      {/* <ProductList productData={allData.categories} /> */}
      <ProductList
        productData={allData.categories.find(
          (item) => item.category === "OurProducts",
        )}
      />
      <Carousel />
      <TipsTricks />
      <FuniroGallery />
    </>
  );
};

export default ShopPage;
