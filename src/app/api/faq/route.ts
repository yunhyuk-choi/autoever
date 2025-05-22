import { FAQDataType } from "@/type/faq";
import { promises as fs } from "fs";
import { NextRequest, NextResponse } from "next/server";

const SubCategoryMapper: { [key: string]: string } = {
  PRODUCT: "서비스 상품",
  COUNSELING: "도입 상담",
  CONTRACT: "계약",
  SIGN_UP: "가입문의",
  BUSINESS: "비즈니스(업무용)",
  ACCIDENT: "사고/보험",
  RESERVATION: "예약/결제",
  VEHICLE: "차량문의",
  REFUEL: "충전",
  COUPON: "쿠폰/기타",
};

async function readData() {
  const json = await fs.readFile("./public/faqData.json", "utf-8");
  return JSON.parse(json);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const tab = searchParams.get("tab");
  const faqCategoryID = searchParams.get("faqCategoryID");
  const limit = Number(searchParams.get("limit")) || 10;
  const offset = Number(searchParams.get("offset")) || 0;
  const data = await readData();

  if (tab === "CONSULT") {
    const items: FAQDataType[] = data.filter((item: FAQDataType) => {
      if (faqCategoryID)
        return (
          item.categoryName === "도입문의" &&
          item.subCategoryName === SubCategoryMapper[faqCategoryID]
        );
      return item.categoryName === "도입문의";
    });

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
    const items: FAQDataType[] = data.filter((item: FAQDataType) => {
      if (faqCategoryID) return item.categoryName === SubCategoryMapper[faqCategoryID];
      return item.categoryName !== "도입문의";
    });

    return NextResponse.json({
      pageInfo: {
        totalRecord: items.length,
        offset: offset,
        limit: limit,
        prevOffset: offset !== 0 ? offset - limit : 0,
        nextOffset: offset + limit <= items.length ? offset + limit : offset,
      },
      items: items.slice(offset, offset + limit),
    });
  }
}
