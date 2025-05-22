"use client";

import { useCategory } from "@/store/store";
import { CategoryResponse } from "@/type/category";
import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import SubCategoryBar from "../common/SubCategoryBar";
import { getFaq } from "@/service/faq";

interface FAQRequestProps {
  tab: string;
  faqCategoryID: string;
}

function FAQ() {
  const { tab, category } = useCategory();
  const req: FAQRequestProps = {
    tab: tab,
    faqCategoryID: category,
  };
  const { data } = useQuery<CategoryResponse[]>({
    queryKey: ["faq", { req }],
    queryFn: () => getFaq(req),
  });

  console.log(data);

  return (
    <div className="min-h-[100vh] m-[0_auto]">
      <SubCategoryBar />
    </div>
  );
}

export default memo(FAQ);
