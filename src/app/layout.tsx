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

        {/* Cloudflare Web Analytics */}
        <script
          type="module"
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token":"01207094704940f9b0e9182706bf5d3f"}'
        />
        {/* End Cloudflare Web Analytics */}
      </body>
    </html>
  );
}