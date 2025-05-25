import Link from "next/link";
import AskServiceButton from "./AskServiceButton";

export default function AskService() {
  return (
    <div>
      <h1 className="m-[64px_0_24px] text-[24px] font-bold">서비스 문의</h1>
      <div className="flex flex-col md:flex-row items-center xl:justify-between gap-5 flex-wrap">
        <AskServiceButton
          href="/기아 비즈 서비스 제안서.pdf"
          download="기아 비즈 서비스 제안서.pdf"
          url="/download.svg"
        >
          서비스 제안서 다운로드
        </AskServiceButton>
        <AskServiceButton
          href="https://wiblebiz.kia.com/Counsel"
          url="/write.svg"
        >
          상담문의 등록하기
        </AskServiceButton>
        <AskServiceButton
          href="https://pf.kakao.com/_xfLxjdb"
          url="/talk.svg"
          target="_blank"
        >
          <p className="flex flex-col">
            카톡으로 문의하기
            <em className="font-normal text-start">ID: 기아 비즈</em>
          </p>
        </AskServiceButton>
      </div>
    </div>
  );
}
