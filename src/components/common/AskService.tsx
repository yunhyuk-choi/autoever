import Link from "next/link";

export default function AskService() {
  return (
    <div>
      <h1>서비스 문의</h1>
      <div>
        <div>
          <Link href={"/기아 비즈 서비스 제안서.pdf"} download={"기아 비즈 서비스 제안서.pdf"}>
            <button>서비스 제안서 다운로드</button>
          </Link>
          <Link href={"https://wiblebiz.kia.com/Counsel"}>
            <button>상담문의 등록하기</button>
          </Link>
        </div>
        <Link href={"https://pf.kakao.com/_xfLxjdb"} target="_blank">
          <button>
            카톡으로 문의하기
            <em>ID: 기아 비즈</em>
          </button>
        </Link>
      </div>
    </div>
  );
}
