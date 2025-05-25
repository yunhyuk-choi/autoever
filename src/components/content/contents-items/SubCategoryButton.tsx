import { MouseEvent } from "react";

interface SubCategoryButtonProps {
 isSelected: boolean;
 value:string;
 title: string;
 handleCategoryChange: (e: MouseEvent<HTMLButtonElement>)=>void;
}

export default function SubCategoryButton({isSelected,title,value,handleCategoryChange}:SubCategoryButtonProps) {
  return (
    <button
      className={`hover:cursor-pointer p-[0_12px] xl:p-[0_20px] h-[36px] xl:h-[48px] rounded-3xl font-bold justify-center min-w-[48px] ${
       isSelected ? "bg-[#05141F] text-white" : ""
      }`}
      onClick={handleCategoryChange}
      value={value}
    >
      <p>{title}</p>
    </button>
  );
}
