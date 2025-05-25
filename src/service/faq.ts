import { buildSearchParams } from "@/utils/requestHelper";
import axios from "axios";

interface FAQRequestProps {
  tab: string;
  faqCategoryID: string;
  question: string;
  offset: number;
}

export const getFaq = async (req: FAQRequestProps) => {
  const params = {
    tab: req.tab,
    faqCategoryID: req.faqCategoryID === "all" ? undefined : req.faqCategoryID,
    question: req.question !== "" ? req.question : undefined,
    offset: req.offset,
  };
  const { data } = await axios.get(`/api/faq${buildSearchParams(params)}`);
  return data;
};
