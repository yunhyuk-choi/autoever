import Link from "next/link";

interface DownloadAppButtonProps {
  href: string;
  title: string;
  logo: string;
}

export default function DownloadAppButton({
  href,
  logo,
  title,
}: DownloadAppButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className=" bg-white w-[254px] flex flew-row justify-center h-[56px] items-center font-semibold rounded-[6px]"
    >
      <button className={`hover:cursor-pointer flex flex-row p-2`}>
        <span
          style={{
            content: "''",
            backgroundImage: `url(${logo})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "auto 100%",
            height: "24px",
            width: "24px",
            marginRight: "12px",
          }}
        />
        {title}
      </button>
    </Link>
  );
}
