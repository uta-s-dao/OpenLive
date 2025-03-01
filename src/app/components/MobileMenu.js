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

  const links = [
    { href: "/timetable", label: "タイムテーブル" },
    { href: "/venue", label: "会場情報" },
    { href: "/crowdfunding", label: "クラウドファンディング" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <div className='md:hidden'>
      {/* ハンバーガーボタン - isOpenがtrueの時は非表示 */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className='p-2 text-gray-700 hover:text-red-600 transition-colors z-20 relative'
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
            <div className='flex items-center justify-between px-4 py-3 bg-slate-300 text-white'>
              <div className='text-xl font-bold text-slate-300'>Side pege</div>
              <button
                onClick={() => setIsOpen(false)}
                className='p-2 text-white hover:text-red-200 transition-colors'
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

            {/* フッター (SNSリンク) */}
            <></>
            <div className='px-6 py-8 bg-slate-300 '>
              <div className='text-center max-w-md mx-auto'>
                {links.map((link, index) => (
                  <div key={index} className={`${index > 0 ? "mt-6" : ""}`}>
                    <Link
                      href={link.href}
                      className='group relative overflow-hidden inline-block px-8 py-3 w-full rounded-md bg-white bg-opacity-20 backdrop-blur-sm transition-all duration-300 hover:bg-opacity-30 hover:shadow-md'
                    >
                      <span className='relative z-10 text-red-600 font-medium text-lg transition-all duration-300 group-hover:text-red-600 group-hover:font-bold'>
                        {link.label}
                      </span>
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full'></span>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
