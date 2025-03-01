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
      bandName: "オープニングセレモニー",
      university: "-",
    },
    {
      time: "11:00",
      bandName: "アジカン",
      university: "九州工業大学",
    },
    {
      time: "11:45",
      bandName: "ポルカドットスティングレイ",
      university: "産業医科大学",
    },
    {
      time: "12:30",
      bandName: "クリープハイプ",
      university: "九州女子大学",
    },
    {
      time: "13:15",
      bandName: "ONE OK ROCK",
      university: "北九州市立大学",
    },
  ];

  return (
    <div className='bg-white rounded-xl shadow-md overflow-hidden'>
      {/* PC表示用のテーブル */}
      {!isMobile && (
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
                <th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
                  大学
                </th>
              </tr>
            </thead>
            <tbody className='bg-white divide-y divide-gray-200'>
              {timeTableData.map((item, index) => (
                <tr key={index} className='hover:bg-gray-50'>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500'>
                    {item.time}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm font-bold'>
                    {item.bandName}
                  </td>
                  <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
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
        <div className='divide-y divide-gray-200'>
          {timeTableData.map((item, index) => (
            <div key={index} className='p-4 hover:bg-gray-50'>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-medium text-gray-500'>
                  {item.time}
                </span>
                <span className='text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded'>
                  {item.university}
                </span>
              </div>
              <div className='font-bold'>{item.bandName}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
