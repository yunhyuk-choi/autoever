import Link from "next/link";
import { memo } from "react";

function NavigationMenuComponent() {
  return (
    <div className="hidden xl:flex flex-row space-x-6 align-middle items-center mr-8">
      <Link
        href={"https://wiblebiz.kia.com/Guide"}
        className="text-[18px] font-extrabold pr-1 pl-1 "
      >
        서비스 소개
      </Link>
      <Link
        href={"https://wiblebiz.kia.com/Guide"}
        className="text-[18px] font-extrabold pr-1 pl-1 "
      >
        자주 묻는 질문
      </Link>
      <Link
        href={"https://wiblebiz.kia.com/Guide"}
        className="text-[18px] font-extrabold pr-1 pl-1 "
      >
        새소식
      </Link>
      <Link
        href={"https://wiblebiz.kia.com/Guide"}
        className="text-[18px] font-extrabold pr-1 pl-1 "
      >
        상담문의
      </Link>
    </div>
  );
}

export default memo(NavigationMenuComponent);
