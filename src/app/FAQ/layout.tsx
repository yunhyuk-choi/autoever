import ContentHeader from "@/components/content/ContentHeader";
import ContentTabBar from "@/components/content/ContentTabBar";

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-[0_auto_80px] max-w-[1240px] pt-20 pr-[24px] pl-[24px] xl:pr-[48px] xl:pl-[48px]">
      <ContentHeader />
      <ContentTabBar />
      {children}
    </div>
  );
}
