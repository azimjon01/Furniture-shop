import { create } from "zustand";

interface Slide {
  id: number;
  title: string;
  date: string;
  img: string;
}

interface CarouselState {
  slides: Slide[];
  currentIndex: number;
  nextSlide: () => void;
  prevSlide: () => void;
}

export const useCarouselStore = create<CarouselState>((set) => ({
  slides: [
    {
      id: 1,
      title: "How to create a living room to love",
      date: "20 Jan 2020",
      img: "/assets/images/tips-tricks/tips-tricks-one.png",
    },
    {
      id: 2,
      title: "Solution for clean look working space",
      date: "10 Jan 2020",
      img: "/assets/images/tips-tricks/tips-tricks-two.png",
    },
    {
      id: 3,
      title: "Make your cooking activity more fun with good setup",
      date: "20 Jan 2020",
      img: "/assets/images/tips-tricks/tips-tricks-three.png",
    },
    {
      id: 4,
      title: "Make your cooking activity more fun with good setup",
      date: "20 Jan 2020",
      img: "/assets/images/tips-tricks/tips-tricks-four.png",
    },
  ],
  currentIndex: 0,
  nextSlide: () =>
    set((state) => ({
      currentIndex: (state.currentIndex + 1) % state.slides.length,
    })),
  prevSlide: () =>
    set((state) => ({
      currentIndex:
        (state.currentIndex - 1 + state.slides.length) % state.slides.length,
    })),
}));
