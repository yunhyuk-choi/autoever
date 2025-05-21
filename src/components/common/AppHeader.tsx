import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import HamburgerToggle from "./HamburgerToggle";
import NavigationMenuComponent from "./NavigationMenuComponent";

function AppHeader() {
  return (
    <header className="">
      <div className="pl-[24px] pr-[12px] inner flex align-middle flex-wrap mt-0 mb-0 mr-auto ml-auto h-[56px] justify-between">
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
