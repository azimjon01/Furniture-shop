import { create } from "zustand";

interface LikeState {
  likedItems: number[]; // Like qilingan mahsulot IDlari
  toggleLike: (id: number) => void;
}

export const useLikesStore = create<LikeState>((set) => ({
  likedItems: [],
  toggleLike: (id) =>
    set((state) => ({
      likedItems: state.likedItems.includes(id)
        ? state.likedItems.filter((item) => item !== id)
        : [...state.likedItems, id],
    })),
}));

// Products da product qoshish

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  totalPrice: number;
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  totalPrice: 0,

  addToCart: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
          ),
          totalPrice: state.totalPrice + item.price,
        };
      }
      return {
        items: [...state.items, { ...item, quantity: 1 }],
        totalPrice: state.totalPrice + item.price,
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const itemToRemove = state.items.find((i) => i.id === id);
      if (!itemToRemove) return state;

      const updatedItems = state.items.filter((i) => i.id !== id);
      return {
        items: updatedItems,
        totalPrice:
          state.totalPrice - itemToRemove.price * itemToRemove.quantity,
      };
    }),

  clearCart: () => set({ items: [], totalPrice: 0 }),
}));
