"use client";
import { memo, MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useCategory } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { getFaq } from "@/service/faq";
import { FAQDataType, FAQRequestProps, FAQResponseProps } from "@/type/faq";
import ContentAnswer from "@/components/content/ContentAnswer";
import LoadNextButton from "@/components/common/LoadNextButton";
import NoContent from "../common/NoContent";
import Image from "next/image";
import LoadingProgress from "../common/LodingProgress";

function ContentComponent() {
  const { tab, category, question, setResultNum } = useCategory();
  const [nextOffset, setNextOffset] = useState<number>(0);
  const [list, setList] = useState<FAQDataType[]>([]);

  const req: FAQRequestProps = useMemo(() => {
    return { tab: tab, faqCategoryID: category, offset: nextOffset, question: question };
  }, [category, nextOffset, question, tab]);

  const { data, refetch, isPending } = useQuery<FAQResponseProps>({
    queryKey: ["faq", { req }],
    queryFn: () => getFaq(req),
    enabled: req.question === "" || req.question.length > 1,
  });

  useEffect(() => {
    setNextOffset(0);
    setList([]);
    refetch();
  }, [tab, category, question]);

  useEffect(() => {
    if (data) setList((prev) => [...prev, ...data.items]);
  }, [data]);

  useEffect(()=>{
    if (question!=="" && data) setResultNum(data.pageInfo.totalRecord);
    if (question==="") setResultNum(-1);
  },[data,question,setResultNum])

  const handleNext = useCallback(
    (e: MouseEvent<HTMLButtonElement>) => {
      setNextOffset(Number(e.currentTarget.value));
      refetch();
    },
    [refetch]
  );

  return (
    <div>
      <Accordion type="single" collapsible className="w-full">
        {list.length ? (
          list.map((item) => (
            <AccordionItem key={item.id} value={String(item.id)}>
              <AccordionTrigger className="flex flex-wrap xl:flex-row hover:cursor-pointer data-[state=open]:bg-[#f8f8f8] text-[16px] md:text-[20px] border-b-1 p-[16px_0] md:p-[24px_0] border-gray-300 hover:no-underline">
                <div className="flex flex-row gap-[4px] md:gap-2 text-[12px] md:text-[16px] w-full xl:w-auto">
                {item.categoryName!=="도입문의"?<p className="flex flex-row text-center xl:w-[8em] hover:none text-gray-500">{item.categoryName}
                  <Image className="ml-3 xl:hidden" src={"/arrowRight.svg"} width={12} height={12} alt="arrowRight" />
                </p>:<></>}
                <p className="text-center xl:w-[8em] text-gray-500">{item.subCategoryName}</p>
                </div>
                
                <h2 className="flex-[1_1] font-bold ">{item.question}</h2>
              </AccordionTrigger>
              <AccordionContent className="overflow-x-scroll p-[20px_0] md:p-[32px_40px]">
                <ContentAnswer answerHtml={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))
        ) : (
          <NoContent />
        )}
      </Accordion>
      <LoadingProgress className={isPending?"flex":"hidden"} />
      <LoadNextButton
        onClickHandler={handleNext}
        value={data ? String(data.pageInfo.nextOffset) : ""}
        className={`${data && data.pageInfo.offset !== data.pageInfo.nextOffset ? "" : "hidden"}`}
      />
    </div>
  );
}

export default memo(ContentComponent);
