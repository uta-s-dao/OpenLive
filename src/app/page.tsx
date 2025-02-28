"use client";
import Link from "next/link";
import Image from "next/image";
import ArtistsList from "./components/ArtistsList";
import CountdownTimer from "./components/CountdownTimer";
import HighlightsSection from "./components/HighlightsSection";

export default function Home() {
  // Set the event date to some future date
  const eventDate = new Date("2025-09-10T10:30:00");

  return (
    <>
      {/* Hero Section */}
      <section className='relative h-screen flex items-center justify-center overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <Image
            src='/S__23707650.jpg'
            alt='Openlive Festival'
            fill
            className='object-cover'
            priority
          />
        </div>

        <div className='container relative z-10 text-center px-4'>
          <h1 className='text-5xl md:text-7xl font-bold text-black mb-4 drop-shadow-lg'>
            OPENLIVE <span className='text-purple-300'>2025</span>
          </h1>
          <p className='text-xl md:text-2xl text-black mb-8 max-w-3xl mx-auto drop-shadow-md '>
            キャンパスの枠を超えて、音楽でつながる
          </p>

          <CountdownTimer targetDate={eventDate} />

          <div className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'></div>
        </div>
      </section>

      {/* About Section */}
      <section className='py-20 bg-white'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col md:flex-row items-center gap-12'>
            <div className='md:w-1/2'>
              <h2 className='text-2xl md:text-3xl font-bold mb-6 text-gray-900'>
                About OPENLIVE
              </h2>
              <p className='text-gray-700 mb-6 leading-relaxed'>
                オープンライブは2022年から開催されている音楽ライブです。
                ここ数年は主に北九州や福岡大学１５大学ほどが、参加しており、とても盛り上がっております。
              </p>
              <p className='text-gray-700 mb-8 leading-relaxed'>
                今年、オープンライブの規模拡張を狙っており、福岡のビートステーションでライブを行おうと思っております。
                チケットを無料にして多くのお客さんに見に来てもらおうと思っており、現在クラウドファンディングなど
                を行っています
              </p>
              <Link
                href='/about'
                className='text-purple-600 font-semibold text-sm flex items-center hover:text-purple-800 transition-colors'
              >
                クラウドファンディングのページ
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
            <div className='md:w-1/2 relative h-80 md:h-96 overflow-hidden rounded-xl shadow-lg'>
              <Image
                src='/S__23707650.jpg'
                alt='Festival audience'
                fill
                className='object-cover'
              />
            </div>
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <ArtistsList />

      {/* Highlights from Previous Years */}
      <HighlightsSection />

      {/* Schedule Preview */}
      <section className='py-20 bg-gray-50'>
        <div className='container mx-auto'>
          <h2 className='section-title text-3xl'>Time Table</h2>

          <div className='bg-white rounded-xl shadow-md overflow-hidden'>
            <div className='p-6 border-b border-gray-200'>
              <h3 className='text-2xl font-bold'>Saturday, 9 10, 2025</h3>
              <p className='text-gray-600'>10:30 ~ 17:30 PM</p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200'>
              <div className='p-6'>
                <ul className='space-y-4'>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      10:30 AM
                    </span>
                    <span className='text-gray-800'>Opening Ceremony</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:00 AM
                    </span>
                    <span className='text-gray-800'>アジカン</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>ぽるか</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>Age Factory</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>クリープハイプ</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>サカナクション</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>04 Limited Sazabys</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>04 Limited Sazabys</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>04 Limited Sazabys</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>04 Limited Sazabys</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>04 Limited Sazabys</span>
                  </li>
                  <li className='flex items-start'>
                    <span className='text-sm font-semibold text-gray-500 w-16'>
                      11:30 PM
                    </span>
                    <span className='text-gray-800'>The 2</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
