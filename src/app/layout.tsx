import type { Metadata } from "next";
import { ReactNode } from "react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Openlive - University Music Festival",
  description:
    "The biggest intercollegiate music festival featuring bands from 12 universities",
};

import "./globals.css";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <body className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-50'>
        <header className='fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm'>
          <div className='container mx-auto px-4 py-3 flex items-center justify-between'>
            <Link
              href='/'
              className='text-3xl font-bold bg-gradient-to-r from-purple-600 to-red-500 bg-clip-text text-transparent'
            >
              OPENLIVE
            </Link>
            <nav className='hidden md:flex space-x-8 text-gray-700'>
              <Link
                href='/'
                className='hover:text-purple-600 transition-colors'
              >
                Home
              </Link>
              <Link
                href='/artists'
                className='hover:text-purple-600 transition-colors'
              >
                Artists
              </Link>
              <Link
                href='/timetable'
                className='hover:text-purple-600 transition-colors'
              >
                Timetable
              </Link>
              <Link
                href='/venue'
                className='hover:text-purple-600 transition-colors'
              >
                Venue
              </Link>
              <Link
                href='/about'
                className='hover:text-purple-600 transition-colors'
              >
                About
              </Link>
            </nav>
            <div className='md:hidden'>
              <button className='p-2 text-gray-700 hover:text-purple-600 transition-colors'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
          </div>
        </header>

        <main className='pt-16 pb-20'>{children}</main>

        <footer className='bg-gray-900 text-white py-8'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col md:flex-row justify-between'>
              <div className='mb-6 md:mb-0'>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-purple-400 to-red-400 bg-clip-text text-transparent mb-4'>
                  OPENLIVE
                </h2>
                <p className='text-gray-400 max-w-md'>
                  キャンパスの枠を超えて、音楽でつながる
                </p>
              </div>
              <div className='grid grid-cols-2 gap-8 sm:grid-cols-3'>
                <div>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>
                    リンク
                  </h3>
                  <div className='mt-4 space-y-2'>
                    <Link
                      href='/'
                      className='text-gray-300 hover:text-white block'
                    >
                      Home
                    </Link>
                    <Link
                      href='/artists'
                      className='text-gray-300 hover:text-white block'
                    >
                      Artists
                    </Link>
                    <Link
                      href='/timetable'
                      className='text-gray-300 hover:text-white block'
                    >
                      Timetable
                    </Link>
                    <Link
                      href='/venue'
                      className='text-gray-300 hover:text-white block'
                    >
                      クラウドファンディング
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className='text-sm font-semibold uppercase tracking-wider text-gray-400'>
                    お問い合わせ
                  </h3>
                  <div className='mt-4 space-y-2'>
                    <a
                      href='mailto:info@openlive.jp'
                      className='text-gray-300 hover:text-white block'
                    >
                      Email
                    </a>
                    <a
                      href='https://twitter.com/openlive'
                      className='text-gray-300 hover:text-white block'
                    >
                      Instaagram
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-8 border-t border-gray-700 pt-8 text-center text-sm text-gray-400'>
              &copy; {new Date().getFullYear()} Openlive. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
