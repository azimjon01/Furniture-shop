// import { useLikesStore } from "../store/useLikesStore";
// import { allData } from "@/data/allData";
// import { LikeProductCard } from "./LikeProductCard";

// export const LikedProducts = () => {
//   const { likedItems } = useLikesStore();
//   const likedProducts = Object.values(allData)
//     .flatMap((category) => category.products)
//     .filter((item) => likedItems.includes(item.id));

//   if (likedProducts.length === 0) {
//     return <p>You haven't liked any inspirations yet.</p>;
//   }

//   return (
//     <div>
//       <h2 style={{ textAlign: "center" }}>Liked Products</h2>
//       <div style={{ display: "flex", flexWrap: "wrap" }}>
//         {likedProducts.map((product) => (
//           <LikeProductCard key={product.id} product={product} />
//         ))}
//       </div>
//     </div>
//   );
// };

import { useLikesStore } from "../store/useLikesStore";
import { allData } from "@/data/allData";
import { LikeProductCard } from "./LikeProductCard";

export const LikedProducts = () => {
  const { likedItems } = useLikesStore();

  const likedProducts = Object.values(allData)
    .flatMap((category) =>
      category.products.map((product) => ({
        ...product,
        category: category.name, // <== Har bir product'ga category qo'shamiz
      })),
    )
    .filter((item) =>
      likedItems.some(
        (liked) => liked.id === item.id && liked.category === item.category,
      ),
    );

  if (likedProducts.length === 0) {
    return <p>You haven't liked any inspirations yet.</p>;
  }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Liked Products</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {likedProducts.map((product) => (
          <LikeProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
