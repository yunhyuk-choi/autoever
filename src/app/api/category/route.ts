import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const tab = searchParams.get("tab");

  if (tab === "CONSULT")
    return NextResponse.json([
      {
        categoryID: "PRODUCT",
        name: "서비스 상품",
      },
      {
        categoryID: "COUNSELING",
        name: "도입 상담",
      },
      {
        categoryID: "CONTRACT",
        name: "계약",
      },
    ]);

  if (tab === "USAGE")
    return NextResponse.json([
      {
        categoryID: "SIGN_UP",
        name: "가입문의",
      },
      {
        categoryID: "BUSINESS",
        name: "비즈니스(업무용)",
      },
      {
        categoryID: "ACCIDENT",
        name: "사고/보험",
      },
      {
        categoryID: "RESERVATION",
        name: "예약/결제",
      },
      {
        categoryID: "VEHICLE",
        name: "차량문의",
      },
      {
        categoryID: "REFUEL",
        name: "충전",
      },
      {
        categoryID: "COUPON",
        name: "쿠폰/기타",
      },
    ]);
}
