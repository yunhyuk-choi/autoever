import { useCategory } from "@/store/store";
import { useCallback } from "react";

interface SearchResultBarProps {
  className?: string;

}

export default function SearchResultBar({
  className,
}: SearchResultBarProps) {
  const {resultNum,setQuestion} = useCategory();

  const handleReset = useCallback(() => {
    setQuestion("");
  },[setQuestion])

  return (
    <div className={`${resultNum===-1? "hidden":""} flex flex-row text-[20px] font-bold justify-between mb-5`}>
      <h3>검색결과 총 {resultNum}건</h3>
      <button
        className={`flex flex-row items-center font-normal before:content-[''] before:bg-[url('/resetIcon.svg')] before:w-[24px] before:h-[24px] before:block hover:cursor-pointer ${className}`}
        onClick={handleReset}
      >
        검색초기화
      </button>
    </div>
  );
}
