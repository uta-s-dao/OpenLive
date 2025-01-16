import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Live",
};

import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang='en'>
      <body className="bg-red-100">
        <div className='fixed top-0 left-0 right-0 flex items-end bg-gradient-to-t bg-red-100 text-black/60'>
          <Link href="./" className='text-5xl text-center'>Openlive</Link>
          <Link href="./" className='ml-auto'>
            <button className="text-xl">Details</button>
          </Link>
        </div>
        <div className='pt-11'>
          {children}
        </div>
      </body>
    </html>
  );
}