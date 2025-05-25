export interface FAQDataType {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

export interface FAQRequestProps {
  tab: string;
  faqCategoryID: string;
  question: string;
  offset: number;
}

export interface FAQResponseProps {
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: FAQDataType[];
}