"use client";
import { getCategory } from "@/service/category";
import { useCategory } from "@/store/store";
import { CategoryResponse } from "@/type/category";
import { useQuery } from "@tanstack/react-query";
import { MouseEvent, useCallback } from "react";
import SubCategoryButton from "./SubCategoryButton";

export default function SubCategoryBar() {
  const { tab, setCategory, category } = useCategory();
  const { data } = useQuery<CategoryResponse[]>({
    queryKey: ["category", { tab }],
    queryFn: () => getCategory(tab),
  });

  const handleCategoryChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget.value;
      if (target) setCategory(target);
    },
    [setCategory]
  );

  return (
    <div className="text-[14px] flex flex-wrap flex-row items-center pb-[24px] border-b-2 border-[#05141F]">
      <SubCategoryButton isSelected={category==="all"} title="전체" value="all" handleCategoryChange={handleCategoryChange} />
      {data &&
        data.map((item: CategoryResponse) => (
          <SubCategoryButton key={item.categoryID} isSelected={category===item.categoryID} value={item.categoryID} handleCategoryChange={handleCategoryChange} title={item.name} />
        ))}
    </div>
  );
}
