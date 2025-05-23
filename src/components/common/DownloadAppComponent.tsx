import Link from "next/link";

export default function DownloadAppComponent() {
  return (
    <div>
      <h2>기아 비즈 App 지금 만나보세요!</h2>
      <div className="flex flex-row justify-around">
        <Link
          href={"https://play.google.com/store/apps/details?id=kor.mop.user.app"}
          target="_blank"
        >
          <button className="flex flex-row before:content-[''] before:block before:bg-[url('/logo_googleplay.0988de4fccf649a9a960.svg')]  before:bg-no-repeat before:bg-size-[auto_100%] before:h-[24px] before:w-[24px] before:mr-3 p-2">
            {/* <i className="bg-[url('/logo_googleplay.0988de4fccf649a9a960.svg')] bg-no-repeat block bg-size-[auto_100%] h-[48px] w-[48px] mr-3 p-2"></i> */}
            Google Play
          </button>
        </Link>
        <Link
          href={
            "https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794"
          }
          target="_blank"
        >
          <button className="flex flex-row before:content-[''] before:block before:bg-[url('/logo_appstore.fa5d4b59f7dbf3e27ca4.svg')]  before:bg-no-repeat before:bg-size-[auto_100%] before:h-[24px] before:w-[24px] before:mr-3 p-2">
            App Store
          </button>
        </Link>
      </div>
    </div>
  );
}
