import { CategoryStoreProps } from "@/type/category";
import { CONSULT } from "@/type/variables";
import { create } from "zustand";

export const useCategory = create<CategoryStoreProps>()((set) => ({
  tab: CONSULT,
  category: "all",
  setTab: (currentTab: string) => {
    set(() => ({ tab: currentTab, category: "all" }));
  },
  setCategory: (currentCategory: string) => {
    set(() => ({ category: currentCategory }));
  },
}));
