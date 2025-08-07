"use client";
import SafeLink from "./components/SafeLink";
import { VENUE_URLS, SOCIAL_URLS } from "./constants/urls";

import ResponsiveTimeTable from "./components/timeTableData";
import HighlightsSection from "./components/HighlightsSection";
import Kyousann from "./components/kennkatsu";
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

      <section className='py-10 px-4 md:py-10 bg-gradient-to-br from-red-50 to-rose-50'>
        <div className='container mx-auto '>
          <div className='flex  items-center '>
            <div className='w-full order-2 md:order-1'>
              <h2 className='section-title text-8xl'>ヒーローが来るぞー！</h2>
              <p className='text-gray-700  mb-6 leading-relaxed text-2xl'>
                HERO COMPLEX ゲスト出演決定！
              </p>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                実は...10年前、まだ大学生だった彼らがこのオープンライブに出演されていたそうです。そのような縁から現在は全国ツアーを行う人気バンドとなった彼らがこのゲスト出演に応じてくださいました！！
              </p>
              <div className='flex flex-col sm:flex-row gap-4'></div>
              <SafeLink
                href={SOCIAL_URLS.HEROCOMPLEX}
                className='button-secondary'
                external={true}
              >
                HERO COMPLEX instagram
              </SafeLink>
            </div>
          </div>
        </div>
      </section>

      {/* 概要セクション */}
      <section className='py-10 px-4 md:py-10 bg-gradient-to-br from-red-50 to-rose-50'>
        <div className='container mx-auto '>
          <div className='flex  items-center '>
            <div className='w-full order-2 md:order-1'>
              <h2 className='section-title'>オープンライブについて</h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                オープンライブは、北九州エリアの大学によって毎年開催されてきた合同ライブイベントです。
                今年はその枠を広げ、福岡、下関、熊本からも新たなバンドが参加。
                エリアを越えて集まった学生たちが、それぞれの音を響かせます。
              </p>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                音楽が好きなら、きっと刺さる。
                ジャンルを問わず、今の学生たちの“リアル”がここにあります。
              </p>
              <div className='flex flex-col sm:flex-row gap-4'></div>
            </div>
          </div>
        </div>
      </section>

      {/* 会場情報セクション */}
      <section className='py-10 md:py-10 bg-gradient-to-br from-red-50 to-rose-50'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title'>会場情報</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div>
              <h3 className='text-xl font-bold mb-3'>BEAT STATION</h3>
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
      <Kyousann />
      <HighlightsSection />
    </>
  );
}
