import { buildSearchParams } from "@/utils/requestHelper";
import axios from "axios";

interface TermsRequestProps {
  termsClassID: string;
}

export const getTerms = async (req: TermsRequestProps) => {
  const { data } = await axios.get(`api/terms${buildSearchParams(req)}`);
  return data;
};
