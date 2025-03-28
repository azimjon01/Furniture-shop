import React from "react";
import { SHome } from "./Home.styles";
import { useProductStore } from "./store/store";

const Home: React.FC = () => {
  const products = useProductStore((state) => state.products);

  return (
    <SHome.Container>
      <SHome.Hero>
        <SHome.HeroText>
          <h1>Modern Furniture for Your Home</h1>
          <p>
            Explore our collection of high-quality furniture for your living
            space.
          </p>
        </SHome.HeroText>
        <SHome.HeroImage
          src="/assets/images/tips-tricks/tips-tricks-one.png"
          alt="Furniture"
        />
      </SHome.Hero>

      <SHome.ProductGrid>
        {products.map((product) => (
          <SHome.ProductCard key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </SHome.ProductCard>
        ))}
      </SHome.ProductGrid>
    </SHome.Container>
  );
};

export default Home;
