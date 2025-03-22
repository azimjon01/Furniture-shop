export interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  isNew?: boolean;
}
