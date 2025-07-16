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
      bandName: "熊大",
      university: "OKAMOTO'S",
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
      bandName: "THE ORAL CIGARETTES",
      university: "西工大",
    },
    {
      time: "14:00",
      bandName: "ASIAN KUNG-FU GENERATION",
      university: "野次馬",
    },
    {
      time: "14:30",
      bandName: "?",
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
      bandName: "バンド13",
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
      university: "大学15",
    },
    {
      time: "18:00",
      bandName: "バンド16",
      university: "大学16",
    },
  ];

  return (
    <section className='py-20 md:py-40 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title'>タイムテーブル 時間は調整中</h2>
        {/* PC表示用のテーブル */}
        {!isMobile && (
          <div className='container mx-auto  divide-gray-200'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-5 py-2 text-left text-xs  text-gray-500 uppercase tracking-wider'>
                    時間
                  </th>
                  <th className='px-5 py-2 text-left text-xs  text-gray-500 uppercase tracking-wider'>
                    バンド名
                  </th>
                  <th className='px-5 py-2 text-left text-xs  text-gray-500 uppercase tracking-wider'>
                    大学
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {timeTableData.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-5 py-2 whitespace-nowrap text-sm font-medium text-gray-500'>
                      {item.time}
                    </td>
                    <td className='px-5 py-2 whitespace-nowrap text-sm font-bold'>
                      {item.bandName}
                    </td>
                    <td className='px-5 py-2 whitespace-nowrap text-sm font-bold text-gray-500'>
                      {item.university}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* モバイル表示用のカードレイアウト */}
        {isMobile && (
          <div className='container mx-auto  divide-gray-200'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-3 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider'>
                    時間
                  </th>
                  <th className='px-3 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider'>
                    バンド名
                  </th>
                  <th className='px-3 py-4 text-left text-xs font-normal text-gray-500 uppercase tracking-wider'>
                    大学
                  </th>
                </tr>
              </thead>
              <tbody className='bg-white divide-y divide-gray-200'>
                {timeTableData.map((item, index) => (
                  <tr key={index} className='hover:bg-gray-50'>
                    <td className='px-3 py-4 whitespace-nowrap text-xs font-medium text-gray-500'>
                      {item.time}
                    </td>
                    <td className='px-3 py-4 whitespace-nowrap text-xs font-bold'>
                      {item.bandName}
                    </td>
                    <td className='px-3 py-4 whitespace-nowrap text-xs font-semibold text-gray-500'>
                      {item.university}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>{" "}
          </div>
        )}
      </div>
    </section>
  );
}
