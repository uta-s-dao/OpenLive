import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://open-live.vercel.app"),
  title: "タイムテーブル作成 | バンド タイムテーブル作成ツール | 軽音部|",
  description:
    "バンドのタイムテーブルを簡単に作成・共有できる無料ツール。バンド名・大学名・演奏時間を入力するだけで見やすいタイムテーブルが完成。ライブイベント・学祭・サークルの発表会にも最適。",
  keywords:
    "タイムテーブル作成, バンド タイムテーブル, ライブ タイムテーブル, 無料 タイムテーブル, 学祭 タイムテーブル, 演奏順 作成, オープンライブ",
  openGraph: {
    title: "タイムテーブル作成 | オープンライブ",
    description:
      "バンドのタイムテーブルを簡単に作成・共有できる無料ツール。ライブイベント・学祭・サークルの発表会にも最適。",
    url: "https://open-live.vercel.app/create",
    siteName: "オープンライブ",
    images: [
      {
        url: "/fuchiari.png",
        width: 1200,
        height: 630,
        alt: "タイムテーブル作成ツール | オープンライブ",
      },
    ],
    type: "website",
  },
};

export default function CreateLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
