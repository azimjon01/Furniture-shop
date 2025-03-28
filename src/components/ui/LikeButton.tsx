import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikesStore } from "./LikeProductCard";

interface LikeButtonProps {
  id: number;
  category: string;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ id, category }) => {
  const { likedItems, toggleLike } = useLikesStore();
  const isLiked = likedItems.some(
    (item) => item.id === id && item.category === category,
  );

  return (
    <button onClick={() => toggleLike(id, category)}>
      {" "}
      {isLiked ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
    </button>
  );
};
