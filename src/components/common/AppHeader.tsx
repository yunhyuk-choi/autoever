"use client";
import Link from "next/link";
import { memo, useEffect, useState } from "react";
import HamburgerToggle from "./HamburgerToggle";
import NavigationMenuComponent from "./NavigationMenuComponent";

function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handler = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header className={`pl-[24px] pr-[16px] xl:pl-[48px] xl:pr-[40px] fixed bg-white w-full z-49 ${isScrolled? "shadow-md":""}`}>
      <div className="max-w-[1660px] inner flex align-middle items-center flex-wrap mt-0 mb-0 mr-auto ml-auto h-[56px] xl:h-[80px] justify-between">
        <Link
          href={"https://wiblebiz.kia.com/"}
          className="flex bg-center items-center align-middle h-full bg-[url('/logo_kiabiz_sm.e00e011f4010f14b7d2c.svg')] w-[110px] xl:w-[140px] bg-no-repeat"
        >
        </Link>
        <NavigationMenuComponent />
        <HamburgerToggle />
      </div>
    </header>
  );
}

export default memo(AppHeader);
