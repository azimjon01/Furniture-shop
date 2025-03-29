export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: string;
  discount?: string;
  isNew?: boolean;
  category?: string;
}
