"use client";
import { useState, useEffect } from "react";

export default function ResponsiveTimeTable() {
  const [isMobile, setIsMobile] = useState(false);

  // 画面サイズに応じて表示方法を切り替え
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // 初期チェック
    checkIfMobile();

    // リサイズ時にチェック
    window.addEventListener("resize", checkIfMobile);

    // クリーンアップ
    return () => {
      window.removeEventListener("resize", checkIfMobile);
    };
  }, []);

  // タイムテーブルのデータ
  const timeTableData = [
    {
      time: "10:30",
      bandName: "MY FIRST STORY",
      university: "産医大",
    },
    {
      time: "11:00",
      bandName: "Maki",
      university: "共立大",
    },
    {
      time: "11:30",
      bandName: "OKAMOTO'S",
      university: "熊本大学",
    },
    {
      time: "12:00",
      bandName: "luv",
      university: "九大芸工",
    },
    {
      time: "12:30",
      bandName: "Suspended 4th",
      university: "西南大",
    },
    {
      time: "13:00",
      bandName: "マキシマム ザ ホルモン",
      university: "福大",
    },
    {
      time: "13:30",
      bandName: "休憩時間",
      university: "休憩時間",
    },
    {
      time: "14:00",
      bandName: "ASIAN KUNG-FU GENERATION",
      university: "野次馬",
    },
    {
      time: "14:30",
      bandName: "ELLEGARDEN",
      university: "Soes",
    },
    {
      time: "15:00",
      bandName: "ハンブレッダーズ",
      university: "福教",
    },
    {
      time: "15:30",
      bandName: "ハルカミライ",
      university: "下市",
    },
    {
      time: "16:00",
      bandName: "KOTORI",
      university: "スピ",
    },
    {
      time: "16:30",
      bandName: "SHISHAMO",
      university: "歯科大",
    },
    {
      time: "17:00",
      bandName: "バンド14",
      university: "情報工",
    },
    {
      time: "17:30",
      bandName: "バンド15",
      university: "",
    },
    {
      time: "18:00",
      bandName: "HERO COMPLEX",
      university: "元共立",
    },
  ];

  return (
    <section className='py-20 md:py-40 bg-gradient-to-br from-red-50 to-rose-50 relative overflow-hidden'>
      {/* 背景画像 */}

      {/* 背景のオーバーレイ（透明度調整用） */}
      <div className='absolute inset-0 bg-gradient-to-br from-red-50/70 to-rose-50/70'></div>

      {/* コンテンツ */}
      <div className='container mx-auto px-4 relative z-10'>
        <h2 className='section-title'>タイムテーブル 時間は調整中</h2>
        {/* PC表示用のテーブル */}
        {!isMobile && (
          <div className='container mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-100 bg-white/95 backdrop-blur-sm'>
            <div className='bg-gradient-to-r from-red-400 to-rose-400'>
              <h1 className='text-xl font-bold pt-3 text-center text-white'>
                OPENLIVE
              </h1>
              <div className='flex justify-center items-center pb-3'>
                <div className='text-center text-white'>8/20(Wed)</div>
                <div className='pl-10 text-white'>TICKETS ¥1600</div>
              </div>
            </div>
            <div>
              <div
                className='absolute inset-0 z-0 opacity-15'
                style={{
                  backgroundImage: `url(/fuchiari.png)`,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  transform: " scale(0.7)",
                }}
              ></div>
              <table className='min-w-full divide-y divide-gray-200'>
                <tbody className='bg-white/90 divide-y divide-gray-100'>
                  {timeTableData.map((item, index) => (
                    <tr
                      key={index}
                      className='hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 transition-all duration-300 group'
                    >
                      <td className='px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-500 relative'>
                        <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        <div className='flex items-center space-x-3'>
                          <span className='font-mono'>{item.time}</span>
                        </div>
                      </td>
                      <td className='px-5 py-2 whitespace-nowrap text-sm font-bold text-gray-800 group-hover:text-red-700 transition-colors duration-300'>
                        <div className='flex items-center space-x-2'>
                          <div className='w-2 h-2 bg-gradient-to-r from-red-400 to-rose-400 rounded-full flex-shrink-0'></div>
                          <span>{item.bandName}</span>
                        </div>
                      </td>
                      <td className='px-5 py-2 whitespace-nowrap text-sm font-extrabold text-gray-500 group-hover:text-red-600 transition-colors duration-300'>
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

        {/* モバイル表示用のカードレイアウト */}
        {isMobile && (
          <div className='container mx-auto shadow-2xl rounded-2xl overflow-hidden border border-gray-100 bg-white/95 backdrop-blur-sm'>
            <div className='bg-gradient-to-r from-red-400 to-rose-400'>
              <h1 className='text-xl font-bold pt-3 text-center text-white'>
                OPENLIVE
              </h1>
              <div className='flex justify-center items-center pb-3'>
                <div className='text-center text-white'>8/20(Wed)</div>
                <div className='pl-10 text-white'>TICKETS ¥1600</div>
              </div>
            </div>
            <div
              className='absolute inset-0 z-0 opacity-15'
              style={{
                backgroundImage: `url(/fuchiari.png)`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "contain",
                transform: "rotate(90deg) scale(1.7)",
              }}
            ></div>
            <table className='min-w-full divide-y divide-gray-200'>
              <tbody className='bg-white/90 divide-y divide-gray-100'>
                {timeTableData.map((item, index) => (
                  <tr
                    key={index}
                    className='hover:bg-gradient-to-r hover:from-red-50 hover:to-rose-50 transition-all duration-300 group'
                  >
                    <td className='px-3 py-4 whitespace-nowrap text-sm font-medium text-gray-500 relative'>
                      <div className='absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-rose-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                      <div className='flex items-center space-x-2'>
                        <span className='font-mono'>{item.time}</span>
                      </div>
                    </td>
                    <td className='px-2 py-4 whitespace-nowrap text-sm font-extrabold text-gray-800 group-hover:text-red-700 transition-colors duration-300'>
                      <div className='flex items-center space-x-1'>
                        <div className='w-2 h-2 bg-gradient-to-r from-red-400 to-rose-400 rounded-full flex-shrink-0'></div>
                        <span>{item.bandName}</span>
                      </div>
                    </td>
                    <td className='px-2 py-4 whitespace-nowrap text-sm font-bold text-gray-500 group-hover:text-red-600 transition-colors duration-300'>
                      <div className='flex items-center space-x-2'>
                        <span>{item.university}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}
