import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "占いカツ | 毎日の運勢・タロット・星座占い",
  description: "今日の運勢、星座占い、タロットカードで未来を読む。無料で試せる本格的な占いサイト「占いカツ」",
  keywords: "占い, 運勢, タロット, 星座占い, 無料占い, 今日の運勢",
  openGraph: {
    title: "占いカツ | 毎日の運勢・タロット・星座占い",
    description: "今日の運勢、星座占い、タロットカードで未来を読む",
    url: "https://uranai-katu.com",
    siteName: "占いカツ",
    locale: "ja_JP",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased bg-[#0a0015] text-white">
        {children}
      </body>
    </html>
  );
}
