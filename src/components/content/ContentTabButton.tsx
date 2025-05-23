"use client";

import { useCategory } from "@/store/store";
import { CONSULT, USAGE } from "@/type/variables";
import { MouseEvent, useCallback } from "react";
import SearchBar from "../common/SearchBar";
// import { cn } from "@/lib/utils";

export default function ContentTabButton() {
  const { tab, setTab } = useCategory();

  const handleTabChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget.value;
      if (target) setTab(target);
    },
    [setTab]
  );

  return (
    <div>
      <div className="w-full">
        <button
          value={CONSULT}
          className={`hover:cursor-pointer p-[12px_24px] ${
            tab === CONSULT
              ? "text-white bg-[#05141f] border border-[#05141f]"
              : "border-gray-300 border"
          }`}
          onClick={handleTabChange}
        >
          <span className="">서비스 도입</span>
        </button>
        <button
          value={USAGE}
          className={`hover:cursor-pointer p-[12px_24px] ${
            tab === USAGE
              ? "text-white bg-[#05141f] border border-[#05141f]"
              : "border-gray-300 border"
          }`}
          onClick={handleTabChange}
        >
          <span className="">서비스 이용</span>
        </button>
      </div>

      <SearchBar />
    </div>
  );
}
