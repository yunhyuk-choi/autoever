"use client";
import { useCategory } from "@/store/store";
import { CONSULT, USAGE } from "@/type/variables";
import { MouseEvent, useCallback } from "react";
import SearchBar from "./contents-items/SearchBar";
import ContentTabButton from "./contents-items/ContentTabButton";

export default function ContentTabBar() {
  const { tab, setTab } = useCategory();

  const handleTabChange = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      const target = e.currentTarget.value;
      if (target) {
        setTab(target);
        document.title = `${target===CONSULT?"서비스 도입":"서비스 이용"} | 기아 비즈(Kia Biz) - 친환경 모빌리티 서비스`;
      }
    },
    [setTab]
  );

  return (
    <div>
      <div className="w-full mb-[48px]">
        <ContentTabButton
          value={CONSULT}
          isSelected={tab === CONSULT}
          handleTabChange={handleTabChange}
          title="서비스 도입"
        />
        <ContentTabButton
          value={USAGE}
          isSelected={tab === USAGE}
          handleTabChange={handleTabChange}
          title="서비스 이용"
        />
      </div>
      <SearchBar />
    </div>
  );
}
