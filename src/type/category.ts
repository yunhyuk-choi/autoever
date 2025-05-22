export interface Category {
  tab: string;
  category: string;
}

export interface CategoryStoreProps extends Category {
  setTab: (currentTab: string) => void;
  setCategory: (currentCategory: string) => void;
}

export interface CategoryResponse {
  categoryID: string;
  name: string;
}
