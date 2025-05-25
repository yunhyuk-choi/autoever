import { Plus } from "lucide-react";
import { MouseEvent } from "react";

interface LoadNextButtonProps {
  value?: string;
  className?: string;
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function LoadNextButton({ value, className, onClickHandler }: LoadNextButtonProps) {
  return (
    <div className="flex flex-row justify-center font-semibold ">
    <button className={`flex flex-row mt-[40px] justify-center hover:cursor-pointer items-center  gap-2 ${className}`} value={value} onClick={onClickHandler}>
      <Plus /> 더보기
    </button>
    </div>

  );
}
