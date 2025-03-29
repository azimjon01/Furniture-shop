import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useLikesStore } from "./LikeProductCard";

interface LikeButtonProps {
  id: number;
}

export const LikeButton: React.FC<LikeButtonProps> = ({ id }) => {
  const { likedItems, toggleLike } = useLikesStore();
  const isLiked = likedItems.some((item) => item.id == id);

  return (
    <button onClick={() => toggleLike(id)}>
      {" "}
      {isLiked ? <FaHeart color="red" /> : <FaRegHeart color="gray" />}
    </button>
  );
};
