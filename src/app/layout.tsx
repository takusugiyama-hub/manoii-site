import type { Metadata } from "next";
import { Zen_Maru_Gothic } from "next/font/google";
import "./globals.css";

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
  variable: "--font-zen-maru",
});

export const metadata: Metadata = {
  title: "まのいいりょうし",
  description: "庭をつくる。土地を起こす。家をなおす。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" data-scroll-behavior="smooth">
      <body className={zenMaruGothic.variable}>
        {children}
      </body>
    </html>
  );
}