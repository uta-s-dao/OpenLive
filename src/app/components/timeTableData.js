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
      bandName: "バンド1",
      university: "大学1",
    },
    {
      time: "11:00",
      bandName: "バンド2",
      university: "大学2",
    },
    {
      time: "11:30",
      bandName: "バンド3",
      university: "大学3",
    },
    {
      time: "12:00",
      bandName: "バンド4",
      university: "大学4",
    },
    {
      time: "12:30",
      bandName: "バンド5",
      university: "大学5",
    },
    {
      time: "13:00",
      bandName: "バンド6",
      university: "大学6",
    },
    {
      time: "13:30",
      bandName: "バンド7",
      university: "大学7",
    },
    {
      time: "14:00",
      bandName: "バンド8",
      university: "大学8",
    },
    {
      time: "14:30",
      bandName: "バンド9",
      university: "大学9",
    },
    {
      time: "15:00",
      bandName: "バンド10",
      university: "大学10",
    },
    {
      time: "15:30",
      bandName: "バンド11",
      university: "大学11",
    },
    {
      time: "16:00",
      bandName: "バンド12",
      university: "大学12",
    },
    {
      time: "16:30",
      bandName: "バンド13",
      university: "大学13",
    },
    {
      time: "17:00",
      bandName: "バンド14",
      university: "大学14",
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
    <section className='py-10 md:py-10 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title'>タイムテーブル</h2>
        {/* PC表示用のテーブル */}
        {!isMobile && (
          <div className='overflow-x-auto'>
            <table className='min-w-full divide-y divide-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-5 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    時間
                  </th>
                  <th className='px-5 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                    バンド名
                  </th>
                  <th className='px-5 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
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
                    <td className='px-5 py-2 whitespace-nowrap text-sm text-gray-500'>
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
                    <td className='px-3 py-4 whitespace-nowrap text-xs text-gray-500'>
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
