interface SearchResultBarProps {
  resultNum: number;
  className: string;
  onResetSearch: () => void;
}

export default function SearchResultBar({
  resultNum,
  className,
  onResetSearch,
}: SearchResultBarProps) {
  return (
    <div>
      <h3>검색결과 총 {resultNum}건</h3>
      <button
        className={`before:content-[''] before:bg-[url('/resetIcon.svg')] w-[24px] h-[24px] before:block ${className}`}
        onClick={onResetSearch}
      >
        검색초기화
      </button>
    </div>
  );
}
