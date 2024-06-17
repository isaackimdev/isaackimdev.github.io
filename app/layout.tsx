import type { Metadata } from "next";
import { Jua } from "next/font/google";
import "./globals.css";

const jua = Jua({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Isaac Kim's World",
  description: "Isaac Kim's World, Web Site, Resume, Portfolio, 백엔드 포트폴리오, 서버 개발자 포트폴리오",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={jua.className}>{children}</body>
    </html>
  );
}
