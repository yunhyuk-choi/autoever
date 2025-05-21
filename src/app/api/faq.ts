import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

interface FAQDataType {
  id: number;
  categoryName: string;
  subCategoryName: string;
  question: string;
  answer: string;
}

interface ReturnType {
  pageInfo: {
    totalRecord: number;
    offset: number;
    limit: number;
    prevOffset: number;
    nextOffset: number;
  };
  items: FAQDataType[];
}

async function readData() {
  const json = await fs.readFile("/public/faqData.json", "utf-8");
  return JSON.parse(json);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get("tab");
  const limit = Number(searchParams.get("limit")) ?? 10;
  const offset = Number(searchParams.get("offset")) ?? 0;
  const data = await readData();

  if (tab === "CONSULT") {
    const items: FAQDataType[] = data.filter(
      (item: FAQDataType) => item.categoryName === "도입문의"
    );

    return NextResponse.json({
      pageInfo: {
        totalRecord: items.length,
        offset: offset,
        limit: limit,
        prevOffset: offset !== 0 ? offset - limit : 0,
        nextOffset: offset + limit <= items.length ? offset + limit : offset,
      },
      items: items,
    });
  }

  if (tab === "USAGE") {
    const items: FAQDataType[] = data.filter(
      (item: FAQDataType) => item.categoryName !== "도입문의"
    );

    return NextResponse.json({
      pageInfo: {
        totalRecord: items.length,
        offset: offset,
        limit: limit,
        prevOffset: offset !== 0 ? offset - limit : 0,
        nextOffset: offset + limit <= items.length ? offset + limit : offset,
      },
      items: items,
    });
  }
}
