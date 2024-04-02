import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>NextJS API TEST</h1>
      <ul>
        <li>
          <Link href="/inicis">이니시스 테스트</Link>
        </li>
        <li>
          <Link href="/kakao">카카오 싱크 테스트</Link>
        </li>
      </ul>
    </>
  );
}
