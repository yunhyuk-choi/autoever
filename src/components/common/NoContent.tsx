export default function NoContent() {
  return (
    <div className="w-full h-[40vh] flex flex-col justify-center items-center">
      <i className="bg-[url('/noContent.svg')] w-[64px] h-[64px] block bg-no-repeat bg-[auto_100%]" />
      <p>검색결과가 없습니다.</p>
    </div>
  );
}
