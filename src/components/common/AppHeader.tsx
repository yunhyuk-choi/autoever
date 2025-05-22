import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import HamburgerToggle from "./HamburgerToggle";
import NavigationMenuComponent from "./NavigationMenuComponent";

function AppHeader() {
  return (
    <header className="pl-[48px] pr-[48px]">
      <div className="max-w-[1660px] inner flex align-middle items-center flex-wrap mt-0 mb-0 mr-auto ml-auto h-[56px] xl:h-[80px] justify-between">
        <Link
          href={"https://wiblebiz.kia.com/"}
          className="flex bg-center items-center align-middle"
        >
          <Image
            width={110}
            height={40}
            alt="KIA BIZ"
            src={"logo_kiabiz_sm.e00e011f4010f14b7d2c.svg"}
            className="mb-auto mt-auto"
          />
        </Link>
        <NavigationMenuComponent />
        <HamburgerToggle />
      </div>
    </header>
  );
}

export default memo(AppHeader);
