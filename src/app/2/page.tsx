"use client";
import { useState, useEffect } from "react";
import { Zen_Kaku_Gothic_New } from "next/font/google";

const playfair = Zen_Kaku_Gothic_New({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

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
      time: "11:30",
      bandName: "SUPER BEAVER",
      university: "スピ",
    },
    {
      time: "12:00",
      bandName: "うわさのごまさば",
      university: "九女",
    },
    {
      time: "12:30",
      bandName: "SIX LOUNGE",
      university: "福大FUSE",
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
      university: "九工大",
    },
  ];

  return (
    <>
      <section
        className={`${playfair.className} py-20 md:py-40  relative overflow-hidden`}
      >
        <div className='container mx-auto px-2 relative z-5'>
          <h2 className='text-4xl md:text-6xl font-black text-center mb-12 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent'>
            TIME TABLE
          </h2>

          {!isMobile && (
            <div className='container bg-cover mx-1  overflow-hidden  relative'>
              <div
                className='absolute inset-0 bg-cover opacity-50'
                style={{ backgroundImage: "url('/pexels-bdna-2807495.jpg')" }}
              ></div>

              <div className='z-10 relative m-2 text-red-500'>
                <div className='flex flex-col justify-center items-center gap-2 pb-4'>
                  <h3 className='text-2xl  pt-4 text-center font-bold border-b border-red-500'>
                    2年生ライブ
                  </h3>
                  <div className='text-lg  font-semibold border-b border-red-500'>
                    1/17 (土) @ 小倉Fuse TICKET: ¥1,600
                  </div>
                </div>
              </div>

              <div className='z-10 relative'>
                <table className='min-w-full relative z-5'>
                  <tbody>
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
                            <div className='w-1 h-1 bg-red-500 rounded-full flex-shrink-0'></div>
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

          {isMobile && (
            <div className='container bg-cover mx-1  overflow-hidden  relative'>
              <div
                className='absolute inset-0 bg-cover opacity-35'
                style={{ backgroundImage: "url('/pexels-bdna-2807495.jpg')" }}
              ></div>

              <div className='z-10 relative m-2 text-red-500'>
                <div className='flex flex-col justify-center items-center gap-2 pb-4'>
                  <h3 className='text-2xl  pt-4 text-center font-bold border-b border-red-500'>
                    2年生ライブ
                  </h3>
                  <div className='text-lg  font-semibold border-b border-red-500'>
                    1/17 (土) @ 小倉Fuse TICKET: ¥1,600
                  </div>
                </div>
              </div>

              <div className='z-10 relative'>
                <table className='min-w-full relative z-5'>
                  <tbody>
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
                            <div className='w-1 h-1 bg-red-500 rounded-full flex-shrink-0'></div>
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
    </>
  );
}
