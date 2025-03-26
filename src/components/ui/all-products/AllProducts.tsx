import { allData } from "../../../data/allData";
import { LikeProductCard } from "../LikeProductCard";

export const AllProducts = () => {
  return (
    <div>
      <h2>All Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h1>Chairs</h1>
        {allData.chairs.products.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
        <h1>Tables</h1>
        {allData.tables.products.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
        <h1>Sofas</h1>
        {allData.sofas.products.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
        <h1>Living Room</h1>
        {allData.livingRoom.products.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
        <h1>Badroom</h1>
        {allData.bedroomData.products.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
        <h1>Office</h1>
        {allData.officeData.products.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
