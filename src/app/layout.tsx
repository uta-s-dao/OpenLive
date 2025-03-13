import { Metadata } from "next";
import ClientLayout from "./layout-clielnt";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "オープンライブ - 福岡の大学生音楽フェスティバル | 12大学のバンドが集結",
  description:
    "福岡最大の学生間音楽フェスティバル、オープンライブ。12大学から集結したバンドが一堂に会し、ライブパフォーマンスを披露。音楽と大学生の熱い情熱が交差する瞬間をお見逃しなく！",
  openGraph: {
    title: "オープンライブ - 福岡の大学生音楽フェスティバル",
    description:
      "福岡最大の学生間音楽フェスティバル、オープンライブ。12大学から集結したバンドが一堂に会し、ライブパフォーマンスを披露。",
    url: "https://example.com/openlive", // 実際のイベントURLに差し替えてください
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

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
