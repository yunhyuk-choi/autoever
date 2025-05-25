import { MouseEvent } from "react";

interface ContentTabButtonProps {
  value: string;
  isSelected: boolean;
  title: string;
  handleTabChange: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function ContentTabButton({
  value,
  isSelected,
  title,
  handleTabChange,
}: ContentTabButtonProps) {
  return (
    <button
      value={value}
      className={`w-[50%] hover:cursor-pointer p-[12px_24px] ${
        isSelected
          ? "text-white bg-[#05141f] font-extrabold border border-[#05141f]"
          : "border-gray-300 border"
      }`}
      onClick={handleTabChange}
    >
      <span className="">{title}</span>
    </button>
  );
}
