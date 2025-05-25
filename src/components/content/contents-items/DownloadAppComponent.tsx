import DownloadAppButton from "./DownloadAppButton";

export default function DownloadAppComponent() {
  return (
    <div className="mt-[48px] flex flex-wrap justify-center overflow-hidden p-[32px] bg-[#f8f8f8]">
      <h2 className="text-[20px] xl:text-[32px] mb-[24px] w-full text-center font-bold">
        기아 비즈 App 지금 만나보세요!
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-4">
        <DownloadAppButton
          href="https://play.google.com/store/apps/details?id=kor.mop.user.app"
          logo="/logo_googleplay.0988de4fccf649a9a960.svg"
          title="Google Play"
        />
        <DownloadAppButton
          href="https://apps.apple.com/kr/app/kia-biz-%EA%B8%B0%EC%95%84-%EB%B9%84%EC%A6%88/id1598065794"
          logo="/logo_appstore.fa5d4b59f7dbf3e27ca4.svg"
          title="App Store"
        />
      </div>
    </div>
  );
}
