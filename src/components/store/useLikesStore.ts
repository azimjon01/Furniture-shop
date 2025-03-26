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
