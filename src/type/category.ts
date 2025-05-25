export interface Category {
  tab: string;
  category: string;
  question: string;
  resultNum:number;
}

export interface CategoryStoreProps extends Category {
  setTab: (currentTab: string) => void;
  setCategory: (currentCategory: string) => void;
  setQuestion: (questionString: string) =>void;
  setResultNum: (searchResultNum: number) => void;
}

export interface CategoryResponse {
  categoryID: string;
  name: string;
}
