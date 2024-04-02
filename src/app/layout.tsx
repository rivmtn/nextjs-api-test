import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NextJS API Test",
  description: "NextJS API Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
