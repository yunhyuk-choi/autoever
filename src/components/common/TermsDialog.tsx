"use client";
import { useQuery } from "@tanstack/react-query";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { getTerms } from "@/service/terms";
import { JOIN_SERVICE_USE } from "@/type/variables";

import { Fragment, useMemo, useState } from "react";
import ContentAnswer from "../content/ContentAnswer";
import { TermsDataType } from "@/type/terms";

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
          period: `${new Date(item.startDate)} ~ ${
            item.endDate !== 0 ? new Date(item.endDate) : "현재"
          }`,
        };
      }),
    [data]
  );

  const [currentTerm, setCurrentTerm] = useState<number>(0);

  const termContents = useMemo(
    () => (
      <Fragment>
        {data ? (
          <ContentAnswer
            key={data.terms[currentTerm].termsVersion}
            answerHtml={data.terms[0].contents}
          />
        ) : (
          <></>
        )}
      </Fragment>
    ),
    [currentTerm, data]
  );

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
      <DialogContent>
        <DialogHeader>
          <DialogTitle>이용약관</DialogTitle>
          {periodList ? (
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue defaultValue={String()} />
              </SelectTrigger>
              <SelectContent>
                {periodList.map((item) => (
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
