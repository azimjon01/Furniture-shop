export type Product = {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
  oldPrice?: string;
  discount?: string;
  isNew?: boolean;
  category?: string;
};

// export type Product = {
//   category: string;
//   bigTitle: string;
//   products: [
//     id: number,
//     image: string,
//     title: string,
//     description: string,
//     price: number,
//     oldPrice?: string,
//     discount?: string,
//     isNew?: boolean,
//   ];
// };
