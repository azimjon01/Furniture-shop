import { useLikesStore } from "../store/useLikesStore";
import { allData } from "@/data/allData";
import { LikeProductCard } from "./LikeProductCard";

export const LikedProducts = () => {
  const { likedItems } = useLikesStore();
  const likedProducts = allData.chairs.products.filter((item) =>
    likedItems.includes(item.id),
  );

  if (likedProducts.length === 0) {
    return <p>You haven't liked any inspirations yet.</p>;
  }

  return (
    <div>
      <h2>Liked Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {likedProducts.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
