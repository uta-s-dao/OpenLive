// src/app/layout.tsx の改善版
import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";
import { Noto_Sans_JP } from "next/font/google";
import MobileMenu from "./components/MobileMenu";

// 日本語フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "Openlive - 大学音楽フェスティバル",
  description: "12大学からのバンドが集結する、最大の学生間音楽フェスティバル",
};

import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja' className={`${notoSansJP.variable}`}>
      <body className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-noto'>
        <header className='fixed top-0 left-0 right-0 z-50 bg-white'>
          <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
            <Link
              href='/'
              className='text-2xl md:text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'
            >
              <span className='relative bg-gradient-to-t from-red-400 via-red-600 to-yellow-400 bg-clip-text text-transparent'>
                OPENLIVE
              </span>
            </Link>

            <nav className='hidden md:flex space-x-8 text-gray-700'>
              <Link
                href='/'
                className='hover:text-red-600 transition-colors font-medium'
              >
                ホーム
              </Link>
              <Link
                href='/artists'
                className='hover:text-red-600 transition-colors font-medium'
              >
                アーティスト
              </Link>
              <Link
                href='/timetable'
                className='hover:text-red-600 transition-colors font-medium'
              >
                タイムテーブル
              </Link>
              <Link
                href='/venue'
                className='hover:text-red-600 transition-colors font-medium'
              >
                会場情報
              </Link>
              <Link
                href='/about'
                className='hover:text-red-600 transition-colors font-medium'
              ></Link>
            </nav>

            {/* モバイルメニュー（クライアントコンポーネントとして切り離し） */}
            <MobileMenu />
          </div>
        </header>

        <main className='pt-2 '>{children}</main>

        <footer className='bg-gray-700 text-white py-2'>
          <div className='flex space-x-7 w-full items-center justify-center pt-5'>
            <a
              href='mailto:contact@openlive.com'
              className='text-blue-600 hover:text-white block transition-colors'
            >
              <svg
                className='w-10 h-10'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z' />
                <path d='M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z' />
              </svg>
            </a>
            <a
              href='https://www.instagram.com/open_live_2128'
              className='text-purple-500 hover:text-white block transition-colors'
            >
              <svg
                className='w-10 h-10'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807s.011 2.784.058 3.807c.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058s2.987-.01 4.04-.058c.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041s-.01-2.986-.058-4.04c-.045-.975-.207-1.504-.344-1.857a3.096 3.096 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' />
              </svg>
            </a>
            <a
              href='https://www.youtube.com/channel/YOUTUBEUSER'
              className='text-red-600 hover:text-white block transition-colors'
            >
              <svg
                className='w-10 h-10'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z' />
              </svg>
            </a>
            <a
              href='https://www.crowdfunding-site.com/openlive'
              className='text-yellow-600 hover:text-white block transition-colors'
            >
              <svg
                className='w-10 h-10'
                fill='currentColor'
                viewBox='0 0 24 24'
                aria-hidden='true'
              >
                <path d='M12 4.942c1.827 0 3.505.614 4.84 1.651L12 12l-4.84-5.407A7.909 7.909 0 0112 4.942zM17.658 7.37C18.558 8.504 19.08 9.937 19.08 11.5c0 3.914-3.165 7.08-7.08 7.08-3.914 0-7.08-3.166-7.08-7.08 0-1.563.522-2.996 1.422-4.131L12 13.889l5.658-6.519zM12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z' />
                <path d='M13.5 16.5c0 .828-.672 1.5-1.5 1.5s-1.5-.672-1.5-1.5.672-1.5 1.5-1.5 1.5.672 1.5 1.5zM12 7a1 1 0 00-1 1v5a1 1 0 002 0V8a1 1 0 00-1-1z' />
              </svg>
            </a>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400'>
            &copy; {new Date().getFullYear()} Openlive. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
