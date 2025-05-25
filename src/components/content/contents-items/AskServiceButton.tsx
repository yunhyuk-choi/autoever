import Link from "next/link";
import { PropsWithChildren } from "react";

interface AskServiceButtonProps {
  href: string;
  download?: string;
  url: string;
}

export default function AskServiceButton({
  href,
  children,
  url,
  download,
}: PropsWithChildren<AskServiceButtonProps>) {
  return (
    <Link
      href={href}
      download={download}
      className="flex-[1_1] justify-center w-full hover:cursor-pointer"
    >
      <button className="font-bold p-[20px_40px] border w-full flex flex-row justify-center gap-2 items-center border-black hover:cursor-pointer">
        <i
          style={{ backgroundImage: `url(${url})` }}
          className={`w-[48px] h-[48px] block`}
        />
        {children}
      </button>
    </Link>
  );
}
