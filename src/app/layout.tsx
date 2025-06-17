import { Metadata } from "next";
import ClientLayout from "./layout-client";
import { ReactNode } from "react";
import { Noto_Sans_JP } from "next/font/google";

const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://open-live.vercel.app"),
  title: "オープンライブ",
  description:
    "福岡最大の学生間音楽フェスティバル、オープンライブ。14大学から集結したバンドが一堂に会し、ライブパフォーマンスを披露。音楽と大学生の熱い情熱が交差する瞬間をお見逃しなく！",
  keywords:
    "オープンライブ, おーぷんらいぶ, 福岡, 大学生, 音楽フェスティバル, ライブ, バンド",
  icons: {
    icon: "/openlive-icon.png",
  },

  openGraph: {
    title: "オープンライブ",
    description:
      "福岡,北九州の14大学から集結したバンドが一堂に会し、ライブパフォーマンスを披露。",
    url: "https://open-live.vercel.app", // 実際のイベントURLに差し替えてください
    siteName: "オープンライブ",
    images: [
      {
        url: "/openlive.jpg", // public/openlive.jpgを指定
        width: 1200,
        height: 630,
        alt: "オープンライブ 福岡の大学生音楽フェスティバル",
      },
      {
        url: "/openlive.jpg", // public/openlive.jpgを指定
        width: 1200,
        height: 1200,
        alt: "オープンライブ 福岡の大学生音楽フェスティバル スクエア画像",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja' className={`${notoSansJP.variable}`}>
      <body className='min-h-screen font-noto'>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
