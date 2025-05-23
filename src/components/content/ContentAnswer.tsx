"use client";
import { memo } from "react";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import { options } from "@/utils/htmlReactParserOptions";

interface ContentAnswerProps {
  answerHtml: string;
}

function ContentAnswer({ answerHtml }: ContentAnswerProps) {
  const cleanHtml = DOMPurify.sanitize(answerHtml);

  return (
    <div className="mb-6">
      <div className="mt-2 space-y-1 leading-relaxed">{parse(cleanHtml, options)}</div>
    </div>
  );
}

export default memo(ContentAnswer);
