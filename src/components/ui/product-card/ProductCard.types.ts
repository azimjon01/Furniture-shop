export interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  discount?: number;
  isNew?: boolean;
  category?: string;
  quantity?: number;
}
