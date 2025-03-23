import { create } from "zustand";

interface Chair {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
}

const defaultChairs: Chair[] = [
  {
    id: 1,
    name: "Minimalist Chair",
    price: 130,
    image: "/assets/images/chairs/chairs-one.jpeg",
    description: "Modern minimalist chair for a stylish and simple interior.",
  },
  {
    id: 2,
    name: "Luxury Armchair",
    price: 180,
    image: "/assets/images/chairs/chairs-two.jpeg",
    description: "A high-end luxury armchair with premium comfort.",
  },
  {
    id: 3,
    name: "Ergonomic Office Chair",
    price: 220,
    image: "/assets/images/chairs/chairs-three.jpeg",
    description: "Designed for long working hours with excellent back support.",
  },
  {
    id: 4,
    name: "Scandinavian Wooden Chair",
    price: 140,
    image: "/assets/images/chairs/chairs-four.jpeg",
    description: "A stylish Scandinavian wooden chair with a minimalist look.",
  },
  {
    id: 5,
    name: "Vintage Rocking Chair",
    price: 200,
    image: "/assets/images/chairs/chairs-five.jpeg",
    description: "A classic vintage rocking chair, perfect for relaxation.",
  },
  {
    id: 6,
    name: "Classic Dining Chair",
    price: 160,
    image: "/assets/images/chairs/chairs-six.jpeg",
    description: "A timeless classic dining chair for elegant dining spaces.",
  },
  {
    id: 7,
    name: "Futuristic Lounge Chair",
    price: 250,
    image: "/assets/images/chairs/chairs-seven.jpeg",
    description:
      "A futuristic lounge chair with an innovative and bold design.",
  },
  {
    id: 8,
    name: "Rustic Wooden Chair",
    price: 175,
    image: "/assets/images/chairs/chairs-eight.jpeg",
    description: "A handcrafted rustic wooden chair with a vintage charm.",
  },
];

interface ChairsState {
  chairs: Chair[];
  selectedChair: Chair | null;
  isAdmin: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
  selectChair: (id: number) => void;
  clearSelection: () => void;
  addChair: (chair: Chair) => void;
  updateChair: (id: number, updatedChair: Partial<Chair>) => void;
  deleteChair: (id: number) => void;
  purchaseChair: (id: number) => void;
}

export const useChairsStore = create<ChairsState>((set) => ({
  chairs: defaultChairs,
  selectedChair: null,
  isAdmin: false,

  login: (username, password) => {
    if (username === "admin" && password === "1234") {
      set({ isAdmin: true });
      return true;
    }
    return false;
  },

  logout: () => set({ isAdmin: false }),

  selectChair: (id) => {
    set((state) => ({
      selectedChair: state.chairs.find((chair) => chair.id === id) || null,
    }));
  },

  clearSelection: () => set({ selectedChair: null }),

  addChair: (chair) => set((state) => ({ chairs: [...state.chairs, chair] })),

  updateChair: (id, updatedChair) => {
    set((state) => ({
      chairs: state.chairs.map((chair) =>
        chair.id === id ? { ...chair, ...updatedChair } : chair,
      ),
      selectedChair:
        state.selectedChair?.id === id
          ? { ...state.selectedChair, ...updatedChair }
          : state.selectedChair,
    }));
  },

  deleteChair: (id) => {
    set((state) => ({
      chairs: state.chairs.filter((chair) => chair.id !== id),
      selectedChair:
        state.selectedChair?.id === id ? null : state.selectedChair,
    }));
  },

  purchaseChair: (id) => {
    console.log(`Chair with ID ${id} purchased!`);
  },
}));
