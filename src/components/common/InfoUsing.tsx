export default function InfoUsing() {
  return (
    <div>
      <h2>이용 프로세스 안내</h2>
      <ol>
        <li className="flex flex-row">
          <i className="bg-[url('/submitAsk.svg')] bg-no-repeat block bg-size-[auto_100%] h-[48px] w-[48px] mr-3 p-2"></i>
          <span>
            <h3>1. 문의 등록</h3>
            <p>상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.</p>
          </span>
        </li>
        <li className="flex flex-row">
          <i className="bg-[url('/setAdmin.svg')] bg-no-repeat block bg-size-[auto_100%] h-[48px] w-[48px] mr-3 p-2"></i>
          <span>
            <h3>2. 관리자 설정</h3>
            <p>관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.</p>
          </span>
        </li>
        <li className="flex flex-row">
          <i className="bg-[url('/signUpEmployee.svg')] bg-no-repeat block bg-size-[auto_100%] h-[48px] w-[48px] mr-3 p-2"></i>
          <span>
            <h3>3. 임직원 가입</h3>
            <p>이용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.</p>
          </span>
        </li>
        <li className="flex flex-row">
          <i className="bg-[url('/useService.svg')] bg-no-repeat block bg-size-[auto_100%] h-[48px] w-[48px] mr-3 p-2"></i>
          <span>
            <h3>4. 서비스 이용</h3>
            <p>이용자 App에서 차량 예약을 하고 K존에서 바로 이용하세요!</p>
          </span>
        </li>
      </ol>
    </div>
  );
}
