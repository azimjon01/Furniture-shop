export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: string;
  oldPrice?: string;
  discount?: string;
  isNew?: boolean;
  category?: string;
}
