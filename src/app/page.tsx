"use client";
import SafeLink from "./components/SafeLink";
import { VENUE_URLS } from "./constants/urls";

import Image from "next/image";
import ResponsiveTimeTable from "./components/timeTableData";
import HighlightsSection from "./components/HighlightsSection";
import SequentialTextAnimation from "./components/textAnimation";

export default function Home() {
  return (
    <>
      {/* ヒーローセクション - CSS背景画像版（プリロード警告なし） */}
      <section
        className='relative w-screen h-screen flex items-center justify-center overflow-hidden'
        style={{
          backgroundImage: "url(/openlive.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* テキストコンテンツ */}
        <div className='container text-center px-4 py-8 relative z-10'>
          <SequentialTextAnimation />
        </div>
      </section>

      <ResponsiveTimeTable />

      {/* 概要セクション */}
      <section className='py-10 px-4 md:py-10 bg-white'>
        <div className='container mx-auto '>
          <div className='flex  items-center '>
            <div className='w-full order-2 md:order-1'>
              <h2 className='section-title'>オープンライブについて</h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                福岡や北九州の大学軽音楽部のための音楽フェスティバルです。
                今年は14大学が参加します。
              </p>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                2025年は、福岡のビートステーションでの開催を予定しています。より多くの観客に音楽の魅力を届けるため、チケットを無料化する計画があります
              </p>
              <div className='flex flex-col sm:flex-row gap-4'></div>
            </div>
          </div>
        </div>
      </section>

      {/* 会場情報セクション */}
      <section className='py-10 md:py-10 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title'>会場情報</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='rounded-xl overflow-hidden shadow-lg relative h-64 md:h-96'>
              <Image
                src='/beatstation.jpg'
                alt='ビートステーション'
                sizes='(max-width: 768px) 100vw, 600px'
                fill
                className='object-cover'
              />
            </div>

            <div>
              <h3 className='text-xl font-bold mb-3'>
                福岡 ビートステーション
              </h3>
              <p className='text-gray-700 mb-4'>
                福岡市中央区渡辺通4-11-4
                <br />
                西鉄薬院駅から徒歩1〜2分
              </p>

              <div className='space-y-4 mb-6'>
                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>収容人数: 365名</span>
                </div>
                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>座席: スタンディング</span>
                </div>
                <div className='flex items-start'>
                  <svg
                    className='w-5 h-5 text-red-500 mt-0.5 mr-3 flex-shrink-0'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                    />
                  </svg>
                  <span>アクセス: 公共交通機関のご利用をお願いします</span>
                </div>
              </div>

              <SafeLink
                href={VENUE_URLS.BEAT_STATION_MAP}
                className='button-secondary'
                external={true}
              >
                会場の詳細を見る
              </SafeLink>
            </div>
          </div>
        </div>
      </section>

      <HighlightsSection />
    </>
  );
}
