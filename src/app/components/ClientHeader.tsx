"use client";
import { useState } from "react";
import Link from "next/link";
import "../globals.css";
import SafeLink from "./SafeLink";
import SocialIcon from "./SocialIcon";
import { VENUE_URLS, SOCIAL_URLS } from "../constants/urls";
import Image from "next/image";

export default function ClientHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { href: VENUE_URLS.HOME, label: "ホーム", external: false },
    { href: VENUE_URLS.BEAT_STATION_MAP, label: "会場情報", external: true },
    { href: VENUE_URLS.OTHER_LIVES, label: "他のライブ", external: false },
  ];

  return (
    <>
      <div className='fixed top-0 left-0 right-0 z-50 bg-white'>
        <div className='mx-2 px-3 my-1 flex items-center justify-between'>
          <Link
            href='/'
            className='text-2xl md:text-3xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'
          >
            {/* <Image
              src='/openlive.blue.jpg'
              alt='オープンライブロゴ'
              width={1062}
              height={549}
              priority
              className='h-16 w-auto sm:h-20 sm:w-auto md:h-21 md:w-auto lg:h-22 lg:w-auto'
            /> */}
            <Image
              src='/openlive.green.jpg'
              alt='オープンライブロゴ'
              width={978}
              height={528}
              priority
              className='h-16 w-auto sm:h-20 sm:w-auto md:h-20 md:w-auto lg:h-22 lg:w-auto'
            />
            {/* <Image
              src='/openlive.black.mobile.jpg'
              alt='オープンライブロゴ'
              width={985}
              height={608}
              priority
              className='h-16 w-auto sm:h-20 sm:w-auto md:h-24 md:w-auto lg:h-28 lg:w-auto'
            /> */}
          </Link>
          {/* モバイル用ハンバーガーボタン */}
          <div className=''>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className='p-2 text-black hover:text-red-600 transition-colors z-20 relative'
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
      </div>

      {/* サイドメニュー（モバイル用） */}
      {isMenuOpen && (
        <div className='fixed inset-0 z-40 '>
          {/* 半透明の背景オーバーレイ */}
          <div
            className='absolute inset-0 bg-black bg-opacity-70'
            onClick={() => setIsMenuOpen(false)}
          ></div>
          fabicon
          {/* サイドメニュー */}
          <div className='absolute top-0 right-0 h-full w-45 max-w-xs flex flex-col shadow-lg bg-white transform transition-transform duration-300 ease-in-out'>
            <div className='flex items-center justify-between px-4 py-3 bg-red-500 text-white'>
              <div className='text-xl font-bold text-white'>Menu</div>
            </div>

            <div className='px-6 py-8 bg-white flex-grow'>
              <div className='text-center max-w-md mx-auto'>
                {links.map((link, index) => (
                  <div key={index} className={`${index > 0 ? "mt-6" : ""}`}>
                    <SafeLink
                      href={link.href}
                      external={link.external}
                      className='group relative overflow-hidden inline-block px-8 py-3 w-full rounded-md bg-gray-100 transition-all duration-300 hover:bg-gray-200 hover:shadow-md'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className='relative z-10 text-gray-800 font-medium text-lg transition-all duration-300 group-hover:text-red-600 group-hover:font-bold'>
                        {link.label}
                      </span>
                      <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-500 group-hover:w-full'></span>
                    </SafeLink>
                  </div>
                ))}
              </div>
            </div>

            {/* SNSリンク */}
            <div className='flex space-x-7 py-4 w-full px-2 items-center justify-center bg-white'>
              <SocialIcon platform='email' href={SOCIAL_URLS.EMAIL} />
              <SocialIcon platform='instagram' href={SOCIAL_URLS.INSTAGRAM} />
              <SocialIcon platform='youtube' href={SOCIAL_URLS.YOUTUBE} />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
