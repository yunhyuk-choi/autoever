"use client";
import { memo, MouseEvent, useCallback, useEffect, useMemo, useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { useCategory } from "@/store/store";
import { useQuery } from "@tanstack/react-query";
import { getFaq } from "@/service/faq";
import { FAQDataType } from "@/type/faq";
import ContentAnswer from "@/components/content/ContentAnswer";
import LoadNextButton from "@/components/common/LoadNextButton";

interface FAQRequestProps {
  tab: string;
  faqCategoryID: string;
  offset: number;
}

interface FAQResponseProps {
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: FAQDataType[];
}

function ContentComponent() {
  const { tab, category } = useCategory();
  const [nextOffset, setNextOffset] = useState<number>(0);
  const [list, setList] = useState<FAQDataType[]>([]);

  const req: FAQRequestProps = useMemo(() => {
    return { tab: tab, faqCategoryID: category, offset: nextOffset };
  }, [category, nextOffset, tab]);

  const { data, refetch } = useQuery<FAQResponseProps>({
    queryKey: ["faq", { req }],
    queryFn: () => getFaq(req),
  });

  useEffect(() => {
    setNextOffset(0);
    setList([]);
    refetch();
  }, [tab, category, refetch]);

  useEffect(() => {
    if (data) setList((prev) => [...prev, ...data.items]);
  }, [data]);

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
        {list.length &&
          list.map((item) => (
            <AccordionItem key={item.id} value={String(item.id)}>
              <AccordionTrigger className="font-bold">
                <h2>{item.question}</h2>
              </AccordionTrigger>
              <AccordionContent>
                <ContentAnswer answerHtml={item.answer} />
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
      {data && data.pageInfo.offset !== data.pageInfo.nextOffset && (
        <LoadNextButton onClickHandler={handleNext} value={String(data.pageInfo.nextOffset)} />
      )}
    </div>
  );
}

export default memo(ContentComponent);
