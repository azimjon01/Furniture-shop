import { create } from "zustand";

interface Table {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface TableStore {
  tables: Table[];
  addTable: (name: string, price: number, image: File) => void;
  removeTable: (id: number) => void;
  updateTable: (id: number, name: string, price: number) => void;
}

const useTablesStore = create<TableStore>((set) => {
  const savedTables = localStorage.getItem("tables");
  const initialTables: Table[] = savedTables
    ? JSON.parse(savedTables)
    : [
        {
          id: 1,
          name: "Luxury Table",
          price: 120,
          image: "/images/table1.jpg",
        },
        {
          id: 2,
          name: "Classic Table",
          price: 90,
          image: "/images/table2.jpg",
        },
      ];

  return {
    tables: initialTables,

    addTable: (name, price, image) => {
      const newTable: Table = {
        id: Date.now(),
        name,
        price: parseFloat(price.toString()),
        image: URL.createObjectURL(image),
      };
      set((state) => {
        const updatedTables = [...state.tables, newTable];
        localStorage.setItem("tables", JSON.stringify(updatedTables));
        return { tables: updatedTables };
      });
    },

    removeTable: (id) => {
      set((state) => {
        const updatedTables = state.tables.filter((table) => table.id !== id);
        localStorage.setItem("tables", JSON.stringify(updatedTables));
        return { tables: updatedTables };
      });
    },

    updateTable: (id, name, price) => {
      set((state) => {
        const updatedTables = state.tables.map((table) =>
          table.id === id
            ? { ...table, name, price: parseFloat(price.toString()) }
            : table,
        );
        localStorage.setItem("tables", JSON.stringify(updatedTables));
        return { tables: updatedTables };
      });
    },
  };
});

export default useTablesStore;
