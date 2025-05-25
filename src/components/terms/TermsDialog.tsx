"use client";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { getTerms } from "@/service/terms";
import { JOIN_SERVICE_USE } from "@/type/variables";
import { Fragment, useCallback, useEffect, useMemo, useState } from "react";
import ContentAnswer from "../content/ContentAnswer";
import { TermsDataType } from "@/type/terms";
import { format } from "date-fns";

interface PeriodListType {
  version: number,
  period: string
}

export default function TermsDialog() {
  const { data } = useQuery({
    queryKey: ["terms"],
    queryFn: () => getTerms({ termsClassID: JOIN_SERVICE_USE }),
  });

  const periodList = useMemo(
    () =>
      data &&
      data.terms.map((item: TermsDataType) => {
        return {
          version: item.termsVersion,
          period: `${format(new Date(item.startDate),"yyyy.MM.dd")} ~ ${
            item.endDate !== 0 ? format(new Date(item.endDate),"yyyy.MM.dd") : "현재"
          }`,
        };
      }),
    [data]
  );

  const [currentTerm, setCurrentTerm] = useState<number>(periodList?periodList[0].version:0);

  useEffect(()=>{
    if(periodList) setCurrentTerm(periodList[0].version);
  },[periodList])

  const termContents = useMemo(
    () => (
      <Fragment>
        {data ? (
          <ContentAnswer
            key={currentTerm}
            answerHtml={data.terms.find((term:TermsDataType)=>term.termsVersion===currentTerm)?.contents}
          />
        ) : (
          <></>
        )}
      </Fragment>
    ),
    [currentTerm, data]
  );

  const handleChange = useCallback((selected:string)=>{
    setCurrentTerm(Number(selected));
  },[])

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="pt-4 pb-4 hover:cursor-pointer hover:underline text-white text-[16px]"
        >
          이용약관
        </button>
      </DialogTrigger>
      <DialogContent className="max-h-[90vh] min-w-[85vw] rounded-none overflow-y-scroll">
        <DialogHeader>
          <DialogTitle className="text-start">이용약관</DialogTitle>
          {periodList ? (
            <Select onValueChange={handleChange}  value={String(currentTerm)}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {periodList.map((item:PeriodListType) => (
                  <SelectItem value={String(item.version)} key={item.version}>
                    {item.period}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <></>
          )}
        </DialogHeader>
        {termContents}
      </DialogContent>
    </Dialog>
  );
}
