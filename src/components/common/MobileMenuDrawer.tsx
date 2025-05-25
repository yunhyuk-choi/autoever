import Link from "next/link";
import { useEffect } from "react";

interface MobileDrawerMenuProps {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenuDrawer({
  onClose,
  open,
}: MobileDrawerMenuProps) {
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);

  return (
    <div
      className={`
        fixed top-[56px] left-0 z-40 w-full h-[calc(100vh-56px)]
        bg-white transition-transform duration-300 ease-in-out
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <nav className="flex flex-col items-center text-[24px] mt-15 h-full w-full space-y-8 hover:cursor-pointer text-lg font-bold text-black">
        <Link href="https://wiblebiz.kia.com/Guide" className="text-center items-center w-full" onClick={onClose}>
          서비스 소개
        </Link>
        <Link href="/FAQ" onClick={onClose}  className="text-center items-center w-full">
          자주 묻는 질문
        </Link>
        <Link href="https://wiblebiz.kia.com/News"  className="text-center items-center w-full" onClick={onClose}>
          새소식
        </Link>
        <Link href="https://wiblebiz.kia.com/Counsel"  className="text-center items-center w-full" onClick={onClose}>
          상담문의
        </Link>
      </nav>
    </div>
  );
}
