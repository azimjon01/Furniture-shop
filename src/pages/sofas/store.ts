import { create } from "zustand";

interface Sofa {
  id: number;
  name: string;
  price: number;
  image: string; // Base64 rasm
}

const defaultSofas: Sofa[] = [
  {
    id: 1,
    name: "Luxury Sofa",
    price: 499,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/...",
  },
  {
    id: 2,
    name: "Minimalist Sofa",
    price: 599,
    image:
      "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/...",
  },
];

interface SofasState {
  sofas: Sofa[];
  addSofa: (sofa: Sofa) => void;
  updateSofa: (id: number, updatedSofa: Partial<Sofa>) => void;
  deleteSofa: (id: number) => void;
}

export const useSofasStore = create<SofasState>((set) => {
  const storedSofas = JSON.parse(localStorage.getItem("sofas") || "null");

  if (!storedSofas) {
    localStorage.setItem("sofas", JSON.stringify(defaultSofas));
  }

  return {
    sofas: storedSofas || defaultSofas,

    addSofa: (sofa) => {
      set((state) => {
        const updatedSofas = [...state.sofas, sofa];
        localStorage.setItem("sofas", JSON.stringify(updatedSofas));
        return { sofas: updatedSofas };
      });
    },

    updateSofa: (id, updatedSofa) => {
      set((state) => {
        const updatedSofas = state.sofas.map((sofa) =>
          sofa.id === id ? { ...sofa, ...updatedSofa } : sofa,
        );
        localStorage.setItem("sofas", JSON.stringify(updatedSofas));
        return { sofas: updatedSofas };
      });
    },

    deleteSofa: (id) => {
      set((state) => {
        const updatedSofas = state.sofas.filter((sofa) => sofa.id !== id);
        localStorage.setItem("sofas", JSON.stringify(updatedSofas));
        return { sofas: updatedSofas };
      });
    },
  };
});
