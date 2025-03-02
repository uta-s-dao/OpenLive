import { Metadata } from "next";
import ClientLayout from "./layout-clielnt";
import { ReactNode } from "react";
export const metadata: Metadata = {
  title: "Openlive - 大学音楽フェスティバル",
  description: "12大学からのバンドが集結する、最大の学生間音楽フェスティバル",
};

export default function LayoutWrapper({ children }: { children: ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
