import { TermsDataType } from "@/type/terms";
import { JOIN_SERVICE_USE } from "@/type/variables";
import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";

async function readData() {
  const json = await fs.readFile("./public/termsData.json", "utf-8");
  return JSON.parse(json);
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const termsClassID = searchParams.get("termsClassID");
  const data: TermsDataType[] = await readData();

  if (termsClassID === JOIN_SERVICE_USE) {
    return NextResponse.json({
      terms: data,
    });
  }
  return NextResponse.json({
    terms: [],
  });
}
