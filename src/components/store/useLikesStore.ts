import { create } from "zustand";

interface CartItem {
  id: number;
  title: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartState {
  items: CartItem[];
  likedItems: number[];
  addToCart: (item: Omit<CartItem, "quantity">) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  toggleLike: (id: number) => void;
}

export const useCartStore = create<CartState>((set) => ({
  items: [],
  likedItems: [],

  // 🛒 Mahsulotni savatchaga qo‘shish
  addToCart: (item) =>
    set((state) => {
      const existingItem = state.items.find((i) => i.id === item.id);
      return {
        items: existingItem
          ? state.items.map((i) =>
              i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
            )
          : [...state.items, { ...item, quantity: 1 }],
      };
    }),

  // ❌ Mahsulotni butunlay olib tashlash
  removeFromCart: (id) =>
    set((state) => ({
      items: state.items.filter((i) => i.id !== id),
    })),

  // 🔄 Savatchani tozalash
  clearCart: () => set(() => ({ items: [], likedItems: [] })),

  // ➕ Mahsulot sonini oshirish
  increaseQuantity: (id) =>
    set((state) => ({
      items: state.items.map((i) =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i,
      ),
    })),

  // ➖ Mahsulot sonini kamaytirish, agar 0 bo‘lsa, savatchadan o‘chirish
  decreaseQuantity: (id) =>
    set((state) => {
      const updatedItems = state.items
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0); // ✅ Agar 0 bo‘lsa, o‘chirilsin

      return { items: updatedItems };
    }),

  // ❤️ Like bosish yoki olib tashlash
  toggleLike: (id) =>
    set((state) => ({
      likedItems: state.likedItems.includes(id)
        ? state.likedItems.filter((item) => item !== id)
        : [...state.likedItems, id],
    })),
}));

// Profile store

interface ProfileState {
  name: string;
  username: string;
  bio: string;
  avatar: string;
  posts: number;
  followers: number;
  following: number;
  isFollowing: boolean;
  toggleFollow: () => void;
}

export const useProfileStore = create<ProfileState>((set) => ({
  name: "Azimjon Mamatqulov",
  username: "Azimjon",
  bio: "Frontend Developer | React & TypeScript | Zustand & Emotion Styled",
  avatar: "/profile.jpg",
  posts: 114,
  followers: 6236,
  following: 23,
  isFollowing: false,
  toggleFollow: () => set((state) => ({ isFollowing: !state.isFollowing })),
}));
