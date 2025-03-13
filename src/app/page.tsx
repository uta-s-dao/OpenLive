"use client";
import Link from "next/link";
import Image from "next/image";
// import ArtistsList from "./components/ArtistsList";
import CountdownTimer from "./components/CountdownTimer";
import HighlightsSection from "./components/HighlightsSection";
import ResponsiveTimeTable from "./components/timeTableData";

export default function Home() {
  // イベント日を将来の日付に設定
  const eventDate = new Date("2025-09-10T10:30:00");

  return (
    <>
      {/* ヒーローセクション */}
      <div className='text-4xl text-bold text-center my-20'>
        現在作成中です。
      </div>
      <section className='relative min-h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          {/* 画像にオーバーレイを追加して視認性を向上 */}
          <div className='absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/30 to-black/70 z-10'></div>
          <div className='relative w-full h-full'>
            <Image
              src='/openlive.jpg'
              alt='Openlive Festival'
              sizes='(max-width: 768px) 100vw, 50vw'
              quality={90}
              fill
              className='object-cover animate-pulse-slow'
              priority
            />
            <div className='absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/70 to-transparent pointer-events-none'></div>
          </div>
        </div>
        <div className='container relative z-10 text-center px-4 py-8 animate-fade-in'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-red-500 to-red-400 bg-clip-text text-transparent'>
            オープンライブ
            <span className='text-red-450'>2025</span>
          </h1>
          <p className='text-lg md:text-xl text-blue mb-8 max-w-2xl mx-auto drop-shadow-md font-medium'>
            キャンパスの枠を超えて、音楽でつながる
          </p>

          <CountdownTimer targetDate={eventDate} />
        </div>
      </section>

      {/* 概要セクション */}
      <section className='py-4 md:py-6 bg-white'>
        <div className='container mx-auto '>
          <div className='flex flex-row items-center gap-2 md:gap-4'>
            <div className='w-full md:w-1/2 order-2 md:order-1'>
              <h2 className='section-title'>オープンライブについて</h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                オープンライブは2022年から開催されている大学軽音楽部のための音楽フェスティバルです。
                北九州や福岡の15大学以上が参加しており、年々規模を拡大しています。
              </p>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                2025年は、福岡のビートステーションでの開催を予定しています。より多くの観客に音楽の魅力を届けるため、チケットを無料化する計画があり、現在クラウドファンディングなどを通じてサポートを募集しています。
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Link
                  href='/crowdfunding'
                  className='button-primary inline-flex items-center justify-center'
                >
                  クラウドファンディング
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-5 w-5 ml-2'
                    viewBox='0 0 20 20'
                    fill='currentColor'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div className='md:w-1/2 relative h-80 md:h-96 overflow-hidden rounded-xl shadow-lg order-1 md:order-2'>
              <Image
                src='/S__23707650.jpg'
                alt='Festival audience'
                fill
                className='object-cover hover:scale-105 transition-transform duration-700'
              />
            </div>
          </div>
        </div>
      </section>
      {/* タイムテーブルプレビュー */}
      <ResponsiveTimeTable />

      {/* Artists Section
      <ArtistsList /> */}

      {/* 会場情報セクション */}
      <section className='py-16 md:py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title'>会場情報</h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
            <div className='rounded-xl overflow-hidden shadow-lg relative h-64 md:h-96'>
              <Image
                src='/S__23707650.jpg'
                alt='ビートステーション'
                fill
                className='object-cover'
              />
            </div>

            <div>
              <h3 className='text-xl font-bold mb-3'>
                福岡 ビートステーション
              </h3>
              <p className='text-gray-700 mb-4'>
                福岡市中央区渡辺通4-8-28 F.EPARKビル4F/5F
                <br />
                地下鉄空港線「天神駅」から徒歩5分
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
                  <span>収容人数: 約600名</span>
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

              <Link href='/venue' className='button-secondary'>
                会場の詳細を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Highlights from Previous Years */}
      <HighlightsSection />
    </>
  );
}
