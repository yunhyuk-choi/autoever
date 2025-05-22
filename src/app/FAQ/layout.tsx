import ContentHeader from "@/components/common/ContentHeader";
import ContentTabButton from "@/components/common/ContentTabButton";

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-[0_auto] max-w-[1240px] pr-[48px] pl-[48px]">
      <ContentHeader />
      <ContentTabButton />
      {children}
    </div>
  );
}
