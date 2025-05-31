// src/app/layout-client.tsx (renamed from layout-clielnt.tsx)
"use client";
import { ReactNode, useState } from "react";
import Link from "next/link";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";

// 日本語フォントの設定
const notoSansJP = Noto_Sans_JP({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

// Client components cannot export metadata in Next.js app router
// All metadata should be defined in the server component (layout.tsx)

export default function ClientLayout({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: "/", label: "ホーム" },
    { href: "/artists", label: "アーティスト" },
    { href: "/timetable", label: "タイムテーブル" },
    { href: "/venue", label: "会場情報" },
    { href: "/todo", label: "他のライブ" },
  ];

  return (
    <html lang='ja' className={`${notoSansJP.variable}`}>
      <body className='min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 font-noto'>
        <header className='fixed top-0 left-0 right-0 z-50 bg-white'>
          <div className='container mx-auto px-4 py-4 flex items-center justify-between'>
            <Link
              href='/'
              className='text-2xl md:text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'
            >
              <span className='relative bg-gradient-to-t mr-5 from-red-400 via-red-600 to-yellow-400 bg-clip-text text-transparent'>
                オープンライブ
              </span>
            </Link>

            {/* PC用ナビゲーション */}
            <nav className='hidden md:flex space-x-8 text-gray-700'>
              {links.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className='hover:text-red-600 transition-colors font-medium'
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* モバイル用ハンバーガーボタン */}
            <div className='md:hidden'>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className='p-2 text-gray-700 hover:text-red-600 transition-colors z-20 relative'
                aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
              >
                {!isMenuOpen ? (
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
                ) : (
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
                      d='M6 18L18 6M6 6l12 12'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </header>

        {/* メインコンテンツ */}
        <div className='flex min-h-screen'>
          {/* サイドメニュー（モバイル用） */}
          {isMenuOpen && (
            <div className='fixed inset-0 z-40 md:hidden'>
              {/* 半透明の背景オーバーレイ */}
              <div
                className='absolute inset-0 bg-black bg-opacity-70 '
                onClick={() => setIsMenuOpen(false)}
              ></div>

              {/* サイドメニュー */}
              <div className='absolute top-0 right-0 h-full w-45 max-w-xs flex flex-col shadow-lg bg-white transform transition-transform duration-300 ease-in-out'>
                <div className='flex items-center justify-between px-4 py-3 bg-red-500 text-white'>
                  <div className='text-xl font-bold text-white'>Menu</div>
                </div>

                <div className='px-6 py-8 bg-white flex-grow'>
                  <div className='text-center max-w-md mx-auto'>
                    {links.map((link, index) => (
                      <div key={index} className={`${index > 0 ? "mt-6" : ""}`}>
                        <Link
                          href={link.href}
                          className='group relative overflow-hidden inline-block px-8 py-3 w-full rounded-md bg-gray-100 transition-all duration-300 hover:bg-gray-200 hover:shadow-md'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className='relative z-10 text-gray-800 font-medium text-lg transition-all duration-300 group-hover:text-red-600 group-hover:font-bold'>
                            {link.label}
                          </span>
                          <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full'></span>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SNSリンク */}
                <div className='flex space-x-7 py-4 w-full items-center justify-center bg-white'>
                  <a
                    href='mailto:contact@openlive.com'
                    className='text-blue-600 hover:text-red-600 block transition-colors'
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
                    className='text-purple-500 hover:text-red-600 block transition-colors'
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
                    href='https://www.youtube.com/@OpenLive2025'
                    className='text-red-600 hover:text-red-600 block transition-colors'
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
                </div>
              </div>
            </div>
          )}

          <main className='flex-grow pt-16'>{children}</main>
        </div>

        <footer className=' py-2'>
          <div className='flex space-x-7 w-full items-center justify-center pt-5'>
            <a
              href='mailto:contact@openlive.com'
              className='text-blue-600 hover:text-red-600 block transition-colors'
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
              className='text-purple-500 hover:text-red-600 block transition-colors'
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
              href='https://www.youtube.com/@OpenLive2025'
              className='text-red-600 hover:text-red-600 block transition-colors'
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
          </div>
        </footer>
      </body>
    </html>
  );
}
