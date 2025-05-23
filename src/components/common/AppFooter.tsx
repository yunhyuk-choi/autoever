import Link from "next/link";
import { memo } from "react";
import TermsDialog from "./TermsDialog";

function AppFooter() {
  return (
    <footer className="pr-[48px] pl-[48px] bg-black">
      <div className="xl:max-w-[1660px] m-[0_auto] pb-11 pt-[34px] flex flex-col xl:flex-row-reverse xl:items-center align-middle justify-between space-y-6 mt-0 mb-0 bg-black text-gray-400 text-[14px] line-height-[24px]">
        <div>
          <span className="xl:flex justify-end">
            <Link href={"https://privacy.kia.com/overview/full-policy"}>
              <button
                type="button"
                className="pt-4 pb-4 hover:cursor-pointer hover:underline text-white mr-6"
              >
                <b className="text-[16px]">개인정보 처리방침</b>
              </button>
            </Link>
            <TermsDialog />
          </span>
          <address className="xl:flex justify-end">
            <span className="mr-3 ">
              서울특별시 서초구 헌릉로 12 <em className="ml-3">기아㈜ </em>
            </span>
            <br className="md:hidden" />
            <span className="mr-3">대표: 송호성, 최준영</span>
            <br />
            <span className="mr-3">사업자등록번호: 119-81-02316</span>
            <br className="md:hidden" />
            <span className="mr-3">통신판매번호: 2006-07935</span>
            <br />
            <span className="mr-3">
              고객센터: <i>1833-4964</i>
            </span>
            <span className="mr-3 xl:mr-0">
              제휴문의:
              <Link href="mailto:kiabiz@kia.com" className="ml-1 underline">
                kiabiz@kia.com
              </Link>
            </span>
          </address>
        </div>
        <p className="before:content-[''] before:bg-[url('/logo_kia.5deccfef5e3772b2d594.svg')] before:bg-no-repeat before:h-[48px] xl:before:h-[56px] before:block before:bg-size-[auto_100%]">
          © 2023 KIA CORP. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default memo(AppFooter);
