"use client";
import { useState, useEffect } from "react";

export default function SecondYearLive() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  const timeTableData = [
    {
      time: "12:00",
      bandName: "SUPER BEAVER",
      university: "スピ",
    },
    {
      time: "12:30",
      bandName: "うわさのごまさば",
      university: "九女",
    },
    {
      time: "13:00",
      bandName: "lumos.",
      university: "西工大",
    },
    {
      time: "13:30",
      bandName: "Tele",
      university: "共立",
    },
    {
      time: "14:00",
      bandName: "サバシスター",
      university: "ソーズ",
    },
    {
      time: "14:30",
      bandName: "Hi-Fi JinGle",
      university: "ひびきの",
    },
    {
      time: "15:00",
      bandName: "KANA-BOON",
      university: "下市",
    },
    {
      time: "15:30",
      bandName: "THE BACKHORN",
      university: "福教大",
    },
    {
      time: "16:00",
      bandName: "SIX LOUNGE",
      university: "ソーズ",
    },
    {
      time: "16:30",
      bandName: "Hi-STANDARD",
      university: "西南",
    },
    {
      time: "17:00",
      bandName: "アジカン",
      university: "スピ",
    },
    {
      time: "17:30",
      bandName: "KOTORI",
      university: "野次馬",
    },
  ];

  return (
    <>
      <section className='relative w-screen h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-900 to-pink-900'>
        <div className='absolute inset-0 bg-black/40'></div>

        <div className='absolute inset-0 overflow-hidden'>
          <div className='absolute top-20 left-10 w-2 h-2 bg-pink-400 rounded-full animate-pulse'></div>
          <div className='absolute top-40 right-20 w-3 h-3 bg-red-400 rounded-full animate-pulse delay-75'></div>
          <div className='absolute bottom-32 left-1/4 w-2 h-2 bg-red-400 rounded-full animate-pulse delay-150'></div>
          <div className='absolute bottom-20 right-1/3 w-3 h-3 bg-pink-300 rounded-full animate-pulse delay-300'></div>
        </div>

        <div className='container text-center px-4 py-8 relative z-10'>
          <div className='space-y-6 animate-fade-in'>
            <h1 className='text-6xl md:text-8xl font-black text-white tracking-wider drop-shadow-2xl'>
              2年生ライブ
            </h1>
            <div className='text-2xl md:text-4xl font-bold text-pink-300'>
              Second Year Live 2025
            </div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mt-8 text-white'>
              <div className='flex items-center gap-3'>
                <svg
                  className='w-8 h-8 text-pink-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
                  />
                </svg>
                <span className='text-xl md:text-2xl font-semibold'>
                  2025.1.17 (土)
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <svg
                  className='w-8 h-8 text-pink-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <span className='text-xl md:text-2xl font-semibold'>
                  小倉Fuse
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <svg
                  className='w-8 h-8 text-pink-400'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
                  />
                </svg>
                <span className='text-xl md:text-2xl font-semibold'>
                  ¥1,600
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='py-20 md:py-40 bg-gradient-to-br from-red-50 via-pink-50 to-red-50 relative overflow-hidden'>
        <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-0 left-0 w-96 h-96 bg-red-400 rounded-full blur-3xl'></div>
          <div className='absolute bottom-0 right-0 w-96 h-96 bg-pink-400 rounded-full blur-3xl'></div>
        </div>

        <div className='container mx-auto px-2 relative z-5'>
          <h2 className='text-4xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent'>
            TIME TABLE
          </h2>

          {!isMobile && (
            <div className='container mx-auto shadow-2xl rounded-3xl overflow-hidden border-2 border-red-200 bg-white/95 backdrop-blur-sm relative'>
              <div className='bg-gradient-to-r from-red-600 via-pink-600 to-red-600'>
                <h3 className='text-3xl font-black pt-6 text-center text-white'>
                  2年生ライブ
                </h3>
                <div className='flex justify-center items-center gap-8 pb-6'>
                  <div className='text-xl text-white font-semibold'>
                    1/17 (土)
                  </div>
                  <div className='text-xl text-white font-semibold'>
                    小倉Fuse
                  </div>
                  <div className='text-2xl text-white font-bold'>
                    TICKET: ¥1,600
                  </div>
                </div>
              </div>

              <div className='relative'>
                <table className='min-w-full relative z-5'>
                  <tbody className='bg-white/90'>
                    {timeTableData.map((item, index) => (
                      <tr
                        key={index}
                        className='hover:bg-gradient-to-r hover:from-red-50 hover:via-pink-50 hover:to-red-50 transition-all duration-300  border-b border-gray-100'
                      >
                        <td className='px-8 py-5 whitespace-nowrap text-base font-bold text-gray-600 relative'>
                          <div className='absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-red-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='flex items-center space-x-4'>
                            <div className='w-3 h-3 bg-gradient-to-r from-red-400 to-pink-400 rounded-full group-hover:scale-125 transition-transform duration-300'></div>
                            <span className='font-mono text-lg'>
                              {item.time}
                            </span>
                          </div>
                        </td>
                        <td className='px-8 py-5 whitespace-nowrap text-lg font-black text-gray-800 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300'>
                          <div className='flex items-center space-x-3'>
                            <span>{item.bandName}</span>
                          </div>
                        </td>
                        <td className='px-8 py-5 whitespace-nowrap text-base font-bold text-gray-500 group-hover:text-red-600 transition-colors duration-300'>
                          <div className='flex items-center space-x-2'>
                            <span>{item.university}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {isMobile && (
            <div className='container mx-1 shadow-2xl rounded-3xl overflow-hidden border-2 border-red-200 bg-white/95 backdrop-blur-sm relative'>
              <div className='z-10 relative bg-red-500'>
                <h3 className='text-2xl font-black pt-4 text-center text-white'>
                  2年生ライブ
                </h3>
                <div className='flex flex-col justify-center items-center gap-2 pb-4'>
                  <div className='text-lg text-white font-semibold'>
                    1/17 (土) @ 小倉Fuse TICKET: ¥1,600
                  </div>
                </div>
              </div>

              <div className='relative'>
                <table className='min-w-full relative z-5'>
                  <tbody className='bg-white/90'>
                    {timeTableData.map((item, index) => (
                      <tr
                        key={index}
                        className='hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 group border-b border-gray-200'
                      >
                        <td className='px-2 py-3 whitespace-nowrap text-sm font-semibold text-gray-500 relative'>
                          <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='flex items-center space-x-2'>
                            <span className='font-mono'>{item.time}</span>
                          </div>
                        </td>
                        <td className='px-2 py-3 whitespace-nowrap text-base font-black text-gray-800 group-hover:text-red-700 transition-colors duration-300'>
                          <div className='flex items-center space-x-2'>
                            <div className='w-2 h-2 bg-red-500 rounded-full flex-shrink-0'></div>
                            <span>{item.bandName}</span>
                          </div>
                        </td>
                        <td className='px-2 py-3 whitespace-nowrap text-sm font-bold text-gray-500 group-hover:text-pink-600 transition-colors duration-300'>
                          <div className='flex items-center space-x-1'>
                            <span>{item.university}</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className='py-16 px-4 md:py-20 bg-gradient-to-br from-red-100 to-pink-100'>
        <div className='container mx-auto'>
          <div className='bg-white rounded-2xl shadow-xl p-8 md:p-12'>
            <h2 className='text-3xl md:text-4xl font-black mb-6 bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent'>
              イベント詳細
            </h2>
            <div className='space-y-6'>
              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0'
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
                <div>
                  <h3 className='font-bold text-xl mb-2'>開催日時</h3>
                  <p className='text-gray-700'>2025年1月17日（土）12:00開演</p>
                </div>
              </div>

              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 11a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <div>
                  <h3 className='font-bold text-xl mb-2'>会場</h3>
                  <p className='text-gray-700'>小倉Fuse</p>
                </div>
              </div>

              <div className='flex items-start'>
                <svg
                  className='w-6 h-6 text-red-600 mt-1 mr-4 flex-shrink-0'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z'
                  />
                </svg>
                <div>
                  <h3 className='font-bold text-xl mb-2'>チケット</h3>
                  <p className='text-gray-700 text-2xl font-bold text-red-600'>
                    ¥1,600
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
