import Link from "next/link";

export default function Page() {
  return (
    <>
      <h1>이니시스 테스트</h1>
      <ul>
        <li>
          <Link href={"/inicis/pay"}>결제 테스트</Link>
        </li>
        <li>
          <Link href={"/inicis/cash-receipt"}>현금영수증 발급 테스트</Link>
        </li>
      </ul>
    </>
  );
}
