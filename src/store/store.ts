import { CategoryStoreProps } from "@/type/category";
import { CONSULT } from "@/type/variables";
import { create } from "zustand";

export const useCategory = create<CategoryStoreProps>()((set) => ({
  tab: CONSULT,
  category: "all",
  question: "",
  resultNum: 0,
  setTab: (currentTab: string) => {
    set(() => ({ tab: currentTab, category: "all", question: "" }));
  },
  setCategory: (currentCategory: string) => {
    set(() => ({ category: currentCategory }));
  },
  setQuestion: (questionString: string) => {
    set(() => ({ question: questionString }));
  },
  setResultNum: (searchResultNum:number) => {
    set(()=>({resultNum: searchResultNum}));
  }
}));
