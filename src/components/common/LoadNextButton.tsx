import { Plus } from "lucide-react";
import { MouseEvent } from "react";

interface LoadNextButtonProps {
  value?: string;
  className?: string;
  onClickHandler: (e: MouseEvent<HTMLButtonElement>) => void;
}

export default function LoadNextButton({ value, className, onClickHandler }: LoadNextButtonProps) {
  return (
    <button className={`flex flex-row gap-2 ${className}`} value={value} onClick={onClickHandler}>
      <Plus /> 더보기
    </button>
  );
}
