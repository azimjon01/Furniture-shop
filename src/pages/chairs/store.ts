import { create } from "zustand";

interface Chair {
  id: number;
  name: string;
  price: number;
  image: string; // Base64 rasm
}

const defaultChairs: Chair[] = [
  {
    id: 1,
    name: "Modern Chair",
    price: 120,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/...", // Base64 rasm
  },
  {
    id: 2,
    name: "Classic Wooden Chair",
    price: 150,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/...",
  },
];

interface ChairsState {
  chairs: Chair[];
  addChair: (chair: Chair) => void;
  updateChair: (id: number, updatedChair: Partial<Chair>) => void;
  deleteChair: (id: number) => void;
}

export const useChairsStore = create<ChairsState>((set) => {
  const storedChairs = JSON.parse(localStorage.getItem("chairs") || "null");

  if (!storedChairs) {
    localStorage.setItem("chairs", JSON.stringify(defaultChairs));
  }

  return {
    chairs: storedChairs || defaultChairs,

    addChair: (chair) => {
      set((state) => {
        const updatedChairs = [...state.chairs, chair];
        localStorage.setItem("chairs", JSON.stringify(updatedChairs));
        return { chairs: updatedChairs };
      });
    },

    updateChair: (id, updatedChair) => {
      set((state) => {
        const updatedChairs = state.chairs.map((chair) =>
          chair.id === id ? { ...chair, ...updatedChair } : chair,
        );
        localStorage.setItem("chairs", JSON.stringify(updatedChairs));
        return { chairs: updatedChairs };
      });
    },

    deleteChair: (id) => {
      set((state) => {
        const updatedChairs = state.chairs.filter((chair) => chair.id !== id);
        localStorage.setItem("chairs", JSON.stringify(updatedChairs));
        return { chairs: updatedChairs };
      });
    },
  };
});
