import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Link href="/">홈으로</Link>
      {children}
    </>
  );
}
