"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import "../globals.css";
import SafeLink from "./SafeLink";
import SocialIcon from "./SocialIcon";
import { VENUE_URLS, SOCIAL_URLS } from "../constants/urls";
import Image from "next/image";

export default function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [animateItems, setAnimateItems] = useState(false);

  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlHeader = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < window.innerHeight) {
        // 最初の画面内では透明背景
        setIsTransparent(true);

        // 下スクロールの場合は非表示、上スクロールの場合は表示
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        // 1画面を超えた場合は白背景
        setIsTransparent(false);

        if (
          currentScrollY > lastScrollY &&
          currentScrollY > window.innerHeight + 50
        ) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlHeader);
    return () => window.removeEventListener("scroll", controlHeader);
  }, [lastScrollY]);

  // メニューオープン時のアニメーション制御
  useEffect(() => {
    if (isMenuOpen) {
      // メニューが開いたときに少し遅らせてアイテムアニメーションを開始
      const timer = setTimeout(() => {
        setAnimateItems(true);
      }, 150);
      return () => clearTimeout(timer);
    } else {
      setAnimateItems(false);
    }
  }, [isMenuOpen]);

  const links = [
    { href: VENUE_URLS.HOME, label: "ホーム", external: false },
    { href: VENUE_URLS.FORM, label: "取り置き", external: false },
    { href: VENUE_URLS.BEAT_STATION_MAP, label: "会場情報", external: true },
    { href: VENUE_URLS.OTHER_LIVES, label: "他のライブ", external: false },
  ];

  return (
    <>
      <style jsx>{`
        @keyframes slideInFromRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideInFromBottom {
          from {
            transform: translateY(30px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInScale {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(239, 68, 68, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(239, 68, 68, 0.6);
          }
        }

        .menu-slide-in {
          animation: slideInFromRight 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .menu-item-enter {
          animation: slideInFromBottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }

        .social-item-enter {
          animation: fadeInScale 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
        }

        .menu-item-hover {
          transition: all 0.3s ease;
        }

        .menu-item-hover:hover {
          transform: translateX(10px) scale(1.05);
          animation: glowPulse 1.5s ease-in-out infinite;
        }
      `}</style>

      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isTransparent ? "bg-transparent" : "bg-white"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className='mx-2 px-3 my-1 flex items-center justify-between'>
          <Link
            href='/'
            className='text-2xl md:text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'
          >
            <Image
              src='/fuchiari.png'
              alt='オープンライブロゴ'
              width={985}
              height={608}
              priority
              className='h-16 w-auto sm:h-20 sm:w-auto md:h-20 md:w-auto lg:h-20 lg:w-auto'
            />
          </Link>
          {/* モバイル用ハンバーガーボタン */}
          <div className=''>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 text-red-600 z-20 relative transition-transform hover:scale-110'
              aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
            >
              {!isMenuOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6 transition-transform'
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
                  className='w-6 h-6 transition-transform rotate-180'
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
      </div>

      {/* サイドメニュー*/}
      {isMenuOpen && (
        <div className='fixed inset-0 z-40'>
          {/* 半透明の背景オーバーレイ */}
          <div
            className='absolute inset-0 bg-black bg-opacity-70 backdrop-blur-sm transition-opacity duration-300'
            onClick={() => setIsMenuOpen(false)}
          ></div>

          {/* サイドメニュー */}
          <div className='absolute top-0 right-0 h-full w-80 max-w-xs flex flex-col shadow-2xl bg-gradient-to-b from-white to-gray-50 transform transition-transform duration-300 ease-in-out menu-slide-in'>
            {/* メニューヘッダー */}
            <div className='px-6 py-4'>
              <div className='text-2xl font-bold text-white flex items-center'>
                <svg
                  className='w-6 h-6 mr-3'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
                Menu
              </div>
            </div>

            {/* メニューアイテム */}
            <div className='px-6 py-8 bg-gradient-to-b from-white to-gray-50 flex-grow overflow-y-auto'>
              <div className='space-y-4'>
                {links.map((link, index) => (
                  <div
                    key={index}
                    className={`menu-item-enter menu-item-hover ${
                      animateItems ? "" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: animateItems ? `${index * 0.1}s` : "0s",
                    }}
                  >
                    <SafeLink
                      href={link.href}
                      external={link.external}
                      className='group relative overflow-hidden block px-6 py-4 rounded-xl bg-white shadow-md border border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 hover:shadow-lg hover:border-red-200'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className='flex items-center justify-between'>
                        <span className='text-gray-800 font-semibold text-lg transition-all duration-300 group-hover:text-red-600'>
                          {link.label}
                        </span>
                        <svg
                          className='w-5 h-5 text-gray-400 transition-all duration-300 group-hover:text-red-500 group-hover:translate-x-1'
                          fill='none'
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M9 5l7 7-7 7'
                          />
                        </svg>
                      </div>
                      {/* ホバー時の下線アニメーション */}
                      <span className='absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500 group-hover:w-full rounded-full'></span>

                      {/* 背景のグラデーション効果 */}
                      <div className='absolute inset-0 bg-gradient-to-r from-red-500/0 to-red-600/0 group-hover:from-red-500/5 group-hover:to-red-600/5 transition-all duration-300 rounded-xl'></div>
                    </SafeLink>
                  </div>
                ))}
              </div>
            </div>

            {/* SNSリンク */}
            <div className='bg-gray-50 border-t border-gray-200 px-6 py-6'>
              <div className='text-center mb-4'>
                <span className='text-gray-600 font-medium'>Follow Us</span>
              </div>
              <div className='flex justify-center space-x-6'>
                {[
                  { platform: "email" as const, href: SOCIAL_URLS.EMAIL },
                  {
                    platform: "instagram" as const,
                    href: SOCIAL_URLS.INSTAGRAM,
                  },
                  { platform: "youtube" as const, href: SOCIAL_URLS.YOUTUBE },
                ].map((social, index) => (
                  <div
                    key={social.platform}
                    className={`social-item-enter ${
                      animateItems ? "" : "opacity-0"
                    }`}
                    style={{
                      animationDelay: animateItems
                        ? `${0.4 + index * 0.1}s`
                        : "0s",
                    }}
                  >
                    <div className='p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110'>
                      <SocialIcon
                        platform={social.platform}
                        href={social.href}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
