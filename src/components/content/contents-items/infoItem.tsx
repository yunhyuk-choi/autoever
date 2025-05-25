
interface InfoItemProps{
 isFirst?:boolean;
 title: string;
 description: string;
 url: string;
}

export default function InfoItem({isFirst,title,description,url}:InfoItemProps) {
  return (
    <li className="flex flex-row xl:flex-col">
      <i style={{ backgroundImage: `url(${url})` }} className={`bg-no-repeat block bg-size-[auto_100%] h-[48px] w-[48px] mr-3 p-2`}></i>
      <span className={isFirst?"":"relative xl:before:bg-[url('/arrowRight.svg')] xl:before:content-[''] xl:before:w-[24px] xl:before:h-[24px] xl:before:absolute xl:before:top-0 xl:before:left-[-36px]"}>
        <h2 className="text-[18px] block font-bold mb-2">{title}</h2>
        <p>{description}</p>
      </span>
    </li>
  );
}
