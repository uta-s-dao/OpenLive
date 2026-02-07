"use client";
import { useState, useEffect } from "react";
import { Noto_Serif_JP } from "next/font/google";

const playfair = Noto_Serif_JP({
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
    bandName: "KANA-BOON",
    university: "下市",
  },
  {
    time: "12:00",
    bandName: "ブロッコリー",
    university: "ひびきの",
  },
  {
    time: "12:30",
    bandName: "すりぃ",
    university: "福教大",
  },
 
  {
    time: "13:00",
    bandName: "マカロニえんぴつ",
    university: "西工大",
  },
   {
    time: "13:30",
   bandName: "SIX LOUNGE",
    university: "スピ",
  },
  {
    time: "14:00",
    bandName: "UNFAIR RULE",
    university: "九女",
  },
  {
    time: "14:30",
     bandName: "ELLEGARDEN",
    university: "野次馬",
  },
   {
    time: "15:00",
    bandName: "SPYAIR",
    university: "Soes",
  },
  
 
  {
    time: "15:30",
    bandName: "Maki",
    university: "共立",
  },
  {
    time: "16:00",
    bandName: "SILENT SIREN",
    university: "歯科大",
  },
  {
    time: "16:30",
    bandName: "KANA-BOON",
    university: "Soes",
  },
  {
    time: "17:00",
    bandName: "UNISON SQUARE GARDEN",
    university: "スピ",
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
                  <h3 className='text-2xl  pt-4 text-center font-bold'>
                    1年生ライブ
                  </h3>
                  <div className='text-lg  font-semibold'>
                    2/19 (土) @ LIVE SOPT WOW! TICKET: ¥1000 + (1drink600)
                  </div>
                </div>
              </div>

              <div className='z-10 relative'>
                <table className='min-w-full relative z-5'>
                  <tbody>
                    {timeTableData.map((item, index) => (
                      <tr
                        key={index}
                        className='hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 group0'
                      >
                        <td className='px-2 py-3 whitespace-nowrap text-sm font-semibold text-gray-900 relative'>
                          <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='flex items-center space-x-2'>
                            <span className='font-mono'>{item.time}</span>
                          </div>
                        </td>
                        <td className='px-2 py-3 whitespace-nowrap text-base font-black text-black group-hover:text-red-700 transition-colors duration-300'>
                          <div className='flex items-center space-x-2'>
                            <div className='w-1 h-1 bg-red-500 rounded-full flex-shrink-0'></div>
                            <span>{item.bandName}</span>
                          </div>
                        </td>
                        <td className='px-2 py-3 whitespace-nowrap text-sm font-bold text-gray-900 group-hover:text-pink-600 transition-colors duration-300'>
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
                className='absolute inset-0 bg-cover opacity-10'
                style={{ backgroundImage: "url('/11.jpg')" }}
              ></div>

              <div className='z-10 relative m-1 text-red-500'>
                <div className='flex flex-col justify-center items-center gap-2 pb-1'>
                  <h3 className='text-2xl  pt-4 text-center font-bold'>
                    1年生ライブ
                  </h3>
                  <div className='text-sm  font-semibold'>
                    2/19 (木) @ LIVE SOPT WOW!
                  </div>
                   <div className='text-sm  font-semibold'>
                    TICKET: ¥1000 + (1 drink600)
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
                        <td className='px-2 py-3 whitespace-nowrap text-sm font-semibold text-gray-700 relative'>
                          <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                          <div className='flex items-center space-x-2'>
                            <span className='font-mono'>{item.time}</span>
                          </div>
                        </td>
                        <td className='px-2 py-3 whitespace-nowrap text-base font-black text-black group-hover:text-red-700 transition-colors duration-300'>
                          <div className='flex items-center space-x-2'>
                            <div className='w-1 h-1 bg-red-500 rounded-full flex-shrink-0'></div>
                            <span>{item.bandName}</span>
                          </div>
                        </td>
                        <td className='px-2 py-3 whitespace-nowrap text-sm font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300'>
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

