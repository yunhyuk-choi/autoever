import { CategoryStoreProps } from "@/type/category";
import { CONSULT } from "@/type/variables";
import { create } from "zustand";

export const useCategory = create<CategoryStoreProps>()((set) => ({
  tab: CONSULT,
  category: "all",
  question: "",
  setTab: (currentTab: string) => {
    set(() => ({ tab: currentTab, category: "all", question: "" }));
  },
  setCategory: (currentCategory: string) => {
    set(() => ({ category: currentCategory }));
  },
  setQuestion: (questionString: string) => {
    set(() => ({ question: questionString }));
  },
}));
