// import { FaHeart, FaRegHeart } from "react-icons/fa";
// import { useLikesStore } from "../store/useLikesStore";

// interface LikeButtonProps {
//   id: number;
// }

// export const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
//   const { likedItems, toggleLike } = useLikesStore();
//   const isLiked = likedItems.includes(id);

//   return (
//     <button onClick={() => toggleLike(id)}>
//       {isLiked ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
//     </button>
//   );
// };

import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikesStore } from "../store/useLikesStore";

interface LikeButtonProps {
  id: number;
  category: string; // <-- category qo'shildi
}

export const LikeButton: React.FC<LikeButtonProps> = ({ id, category }) => {
  const { likedItems, toggleLike } = useLikesStore();
  const isLiked = likedItems.some(
    (item) => item.id === id && item.category === category,
  );

  return (
    <button onClick={() => toggleLike(id, category)}>
      {" "}
      {/* category ham yuboriladi */}
      {isLiked ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
    </button>
  );
};
