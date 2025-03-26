import { LikeButton } from "./LikeButton";

interface LikeProductCardProps {
  product: {
    id: number;
    image: string;
    title: string;
    description: string;
  };
}

export const LikeProductCard: React.FC<LikeProductCardProps> = ({
  product,
}) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "10px",
        margin: "10px",
        textAlign: "center",
      }}
    >
      <img src={product.image} alt={product.title} width={150} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <LikeButton id={product.id} />
    </div>
  );
};
