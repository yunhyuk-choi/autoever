import { memo } from "react";

function ContentHeader() {
  return (
    <div>
      <h1 className="text-[2em] xl:text-[48px] font-extrabold flex flex-col h-[160px] xl:h-[222px] justify-center">
        자주 묻는 질문
        <em className="text-[16px] xl:text-[20px] font-bold mt-[0.4em]">
          궁금하신 내용을 빠르게 찾아보세요.
        </em>
      </h1>
    </div>
  );
}

export default memo(ContentHeader);
