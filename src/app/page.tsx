"use client";
import Link from "next/link";
import Image from "next/image";
import ArtistsList from "./components/ArtistsList";
import CountdownTimer from "./components/CountdownTimer";
import HighlightsSection from "./components/HighlightsSection";

export default function Home() {
  // イベント日を将来の日付に設定
  const eventDate = new Date("2025-09-10T10:30:00");

  return (
    <>
      {/* ヒーローセクション */}
      <section className='relative min-h-[90vh] sm:h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          {/* 画像にオーバーレイを追加して視認性を向上 */}
          <div className='absolute inset-0 bg-gradient-to-b from-purple-900/40 via-purple-800/30 to-black/70 z-10'></div>
          <Image
            src='/S__23707650.jpg'
            alt='Openlive Festival'
            fill
            className='object-cover'
            priority
          />
        </div>
        <div className='container relative z-10 text-center px-4 py-8 animate-fade-in'>
          <h1 className='text-4xl sm:text-5xl md:text-7xl font-black bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent'>
            OPENLIVE
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
        <div className='container mx-auto px-4'>
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
      <section className='py-16 md:py-20 bg-gray-50'>
        <div className='container mx-auto px-4'>
          <h2 className='section-title'>タイムテーブル</h2>
          <p className='text-gray-600 mb-8'>2025年9月10日（土）10:30〜17:30</p>

          <div className='bg-white rounded-xl shadow-md overflow-hidden'>
            <div className='overflow-x-auto'>
              <table className='min-w-full divide-y divide-gray-200'>
                <thead className='bg-gray-50'>
                  <tr>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      時間
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                      バンド名
                    </th>
                    <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider hidden md:table-cell'>
                      大学
                    </th>
                  </tr>
                </thead>
                <tbody className='bg-white divide-y divide-gray-200'>
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                      10:30
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-bold'>
                      オープニングセレモニー
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell'>
                      -
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                      11:00
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-bold'>
                      アジカン
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell'>
                      九州工業大学
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                      11:45
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-bold'>
                      ポルカドットスティングレイ
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell'>
                      産業医科大学
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                      12:30
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-bold'>
                      クリープハイプ
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell'>
                      九州女子大学
                    </td>
                  </tr>
                  <tr className='hover:bg-gray-50'>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                      13:15
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm font-bold'>
                      ONE OK ROCK
                    </td>
                    <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500 hidden md:table-cell'>
                      北九州市立大学
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <ArtistsList />

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
                    className='w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0'
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
                    className='w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0'
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
                    className='w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0'
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

      {/* お問い合わせセクション */}
      <section className='py-16 bg-gradient-to-r from-purple-400 to-pink-300 text-white'>
        <div className='container mx-auto px-4 text-center'>
          <h2 className='text-3xl font-bold mb-6'>お問い合わせ</h2>
          <p className='mb-8 max-w-2xl mx-auto'>
            チケット、出演、スポンサーなどに関するお問い合わせは下記のボタンからお願いします。
          </p>
          <Link
            href='/contact'
            className='button-outline bg-white/10 hover:bg-white/20'
          >
            お問い合わせフォーム
          </Link>
        </div>
      </section>
    </>
  );
}
