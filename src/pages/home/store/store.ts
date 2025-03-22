import { create } from "zustand";

interface Product {
  id: number;
  name: string;
  price: string;
  img: string;
}

interface ProductStore {
  products: Product[];
  setProducts: (newProducts: Product[]) => void;
}

export const useProductStore = create<ProductStore>((set) => ({
  products: [
    {
      id: 1,
      name: "Modern Chair",
      price: "$120",
      img: "/assets/images/funiro-galery/funiro-galery-six.png",
    },
    {
      id: 2,
      name: "Wooden Table",
      price: "$250",
      img: "/assets/images/funiro-galery/funiro-galery-five.png",
    },
    {
      id: 3,
      name: "Luxury Sofa",
      price: "$500",
      img: "/assets/images/funiro-galery/funiro-galery-nine.png",
    },
  ],
  setProducts: (newProducts) => set({ products: newProducts }),
}));
