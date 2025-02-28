"use client";
// src/app/components/MobileMenu.js
import { useState, useEffect } from "react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // メニューが開いている時は背景スクロールを無効化
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // メニューリンクの配列
  const menuLinks = [
    { href: "/", label: "ホーム" },
    { href: "/about", label: "私たちについて" },
    { href: "/services", label: "サービス" },
    { href: "/contact", label: "お問い合わせ" },
    { href: "/blog", label: "ブログ" },
  ];

  return (
    <div className='md:hidden'>
      {/* ハンバーガーボタン - isOpenがtrueの時は非表示 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='p-2 text-gray-700 hover:text-purple-600 transition-colors z-20 relative'
          aria-label='メニューを開く'
        >
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
      )}

      {/* オーバーレイメニュー */}
      {isOpen && (
        <div className='fixed inset-0 z-50'>
          {/* 半透明の背景オーバーレイ */}
          <div
            className='absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm'
            onClick={() => setIsOpen(false)}
          ></div>

          {/* メニューコンテンツ */}
          <div className='relative h-full max-w-md mx-auto bg-white flex flex-col shadow-lg'>
            {/* ヘッダー - ロゴと閉じるボタン */}
            <div className='flex items-center justify-between px-4 py-3 bg-slate-500 text-white'>
              <div className='text-xl font-bold'>Side pege</div>
              <button
                onClick={() => setIsOpen(false)}
                className='p-2 text-white hover:text-purple-200 transition-colors'
                aria-label='メニューを閉じる'
              >
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
              </button>
            </div>

            {/* メニューリンク */}
            <div className='flex-grow overflow-y-auto'>
              <nav className='py-4'>
                <li>
                  <Link href=''>タイムテーブル</Link>
                  <Link href=''>会場情報</Link>
                  <Link href=''>クラウドファンディング</Link>
                  <Link href=''>お問い合わせ</Link>
                </li>
                <ul>
                  {menuLinks.map((link) => (
                    <li
                      key={link.href}
                      className='border-b border-gray-100 last:border-0'
                    >
                      <Link
                        href={link.href}
                        className='block px-6 py-4 text-gray-800 hover:text-purple-600 hover:bg-purple-50 transition-colors'
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* フッター (SNSリンク) */}
            <></>
            <div className='px-6 py-4 bg-gray-50 border-t border-gray-200'>
              <div className='text-red-500 text-center'>
                <div>
                  <Link href=''>タイムテーブル</Link>
                </div>
                <div>
                  <Link href=''>会場情報</Link>
                </div>

                <div>
                  <Link href=''>クラウドファンディング</Link>
                </div>

                <div>
                  <Link href=''>お問い合わせ</Link>
                </div>
              </div>
              <div className='flex justify-center space-x-6 my-2'>
                <a
                  href='#'
                  className='text-gray-500 hover:text-purple-600 transition-colors'
                  aria-label='Twitter'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-purple-600 transition-colors'
                  aria-label='Instagram'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
                <a
                  href='#'
                  className='text-gray-500 hover:text-purple-600 transition-colors'
                  aria-label='Facebook'
                >
                  <svg
                    className='w-6 h-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
