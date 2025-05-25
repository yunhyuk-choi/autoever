import InfoItem from "./infoItem";

export default function InfoUsing() {
  return (
    <div>
      <h1 className="m-[64px_0_24px] text-[24px] font-bold">이용 프로세스 안내</h1>
      <ol className="flex flex-col xl:flex-row gap-5 xl:gap-10">
        <InfoItem isFirst={true} title="1. 문의 등록" url="'/submitAsk.svg'" description="상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다."/>
        <InfoItem title="2. 관리자 설정" url="'/setAdmin.svg'" description="관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다."/>
        <InfoItem title="3. 임직원 가입" url="'/signUpEmployee.svg'" description="이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다."/>
        <InfoItem title="4. 서비스 이용" url="'/useService.svg'" description="이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!"/>
      </ol>
    </div>
  );
}
