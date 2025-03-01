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
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md shadow-sm'>
          <div className='container mx-auto  px-4 py-4 flex items-center justify-between'>
            <Link
              href='/'
              className='text-2xl md:text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'
            >
              OPENLIVE
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

        <main className='pt-16 pb-20'>{children}</main>

        <footer className='bg-gray-900 text-white py-12'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='mb-8 md:mb-0'>
                <h2 className='text-2xl font-black bg-gradient-to-r from-red-600 to-pink-400 bg-clip-text text-transparent mb-4'>
                  OPENLIVE
                </h2>
                <p className='text-gray-400 max-w-md'>
                  キャンパスの枠を超えて、音楽でつながる
                </p>
                <div className='mt-4 flex space-x-4'>
                  <a
                    href='https://www.instagram.com/open_live_2128'
                    className='text-gray-400 hover:text-white transition-colors'
                  >
                    <svg
                      className='w-6 h-6'
                      fill='currentColor'
                      viewBox='0 0 24 24'
                      aria-hidden='true'
                    >
                      <path d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.379.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.379.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808s.013-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807s.011 2.784.058 3.807c.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058s2.987-.01 4.04-.058c.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041s-.01-2.986-.058-4.04c-.045-.975-.207-1.504-.344-1.857a3.096 3.096 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z' />
                    </svg>
                  </a>
                </div>
              </div>
              <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
                <div>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4'>
                    リンク
                  </h3>
                  <div className='space-y-3'>
                    <Link
                      href='/'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      ホーム
                    </Link>
                    <Link
                      href='/artists'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      アーティスト
                    </Link>
                    <Link
                      href='/timetable'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      タイムテーブル
                    </Link>
                    <Link
                      href='/venue'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      会場情報
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400 mb-4'>
                    お問い合わせ
                  </h3>
                  <div className='space-y-3'>
                    <a
                      href='mailto:info@openlive.jp'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      メール
                    </a>
                    <a
                      href='https://instagram.com/openlive'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      Instagram
                    </a>
                    <Link
                      href='/crowdfunding'
                      className='text-gray-300 hover:text-white block transition-colors'
                    >
                      クラウドファンディング
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400'>
              &copy; {new Date().getFullYear()} Openlive. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
