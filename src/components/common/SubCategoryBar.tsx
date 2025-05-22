"use client";
import { getCategory } from "@/service/category";
import { useCategory } from "@/store/store";
import { CategoryResponse } from "@/type/category";
import { useQuery } from "@tanstack/react-query";
import { MouseEvent, useCallback } from "react";

export default function SubCategoryBar() {
  const { tab, setCategory } = useCategory();
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
    <div>
      <button onClick={handleCategoryChange} value={"all"}>
        <p>전체</p>
      </button>
      {data &&
        data.map((item) => (
          <button key={item.categoryID} onClick={handleCategoryChange} value={item.categoryID}>
            <p>{item.name}</p>
          </button>
        ))}
    </div>
  );
}
