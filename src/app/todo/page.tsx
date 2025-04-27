// ステージ名の型定義
export type Stage = "MEGAHERTZ" | "UN" | "CleveRsound";

// パフォーマンス情報の型定義
interface Performance {
  university: string;
  band: string;
}

// タイムスロットの型定義
interface Slot {
  time: string;
  MEGAHERTZ: Performance;
  UN: Performance;
  CleveRsound: Performance;
}

// ステージごとの色の定義
const stageColors: Record<Stage, string> = {
  MEGAHERTZ: "bg-purple-500", // 紫色
  UN: "bg-yellow-500", // 黄色
  CleveRsound: "bg-blue-500", // 青色
};

// 背景色ではなく、枠線と文字色を使用
const stageCellColors: Record<Stage, string> = {
  MEGAHERTZ: "text-purple-700", // 紫色のアクセント
  UN: "text-yellow-700", // 黄色のアクセント
  CleveRsound: " text-blue-700", // 青色のアクセント
};
// ステージ配列（順序制御用）
const stages: Stage[] = ["MEGAHERTZ", "UN", "CleveRsound"];

// タイムテーブルデータ
const timetable: Slot[] = [
  {
    time: "11:00–11:30",
    MEGAHERTZ: { university: "ひびきの", band: "PEDRO" },
    UN: { university: "Free Spirits", band: "SUPER BEAVER" },
    CleveRsound: { university: "So&Soes", band: "ELLEGARDEN" },
  },
  {
    time: "11:30–12:00",
    MEGAHERTZ: { university: "下市", band: "つきみ" },
    UN: { university: "福教大", band: "sinema staff" },
    CleveRsound: { university: "産医大", band: "ヨルシカ" },
  },
  {
    time: "12:00–12:30",
    UN: { university: "九州歯科大", band: "silent siren" },
    MEGAHERTZ: { university: "九州女子大学", band: "UNFAIRRULE" },
    CleveRsound: { university: "九州共立大学", band: "ハルカミライ" },
  },
  {
    time: "12:30–13:00",
    MEGAHERTZ: { university: "So&Soes", band: "ボカロ" },
    UN: { university: "Free Spirits", band: "クリープハイプ" },
    CleveRsound: { university: "北方", band: "ルサンチマン" },
  },
  {
    time: "13:00–13:30",
    MEGAHERTZ: { university: "ひびきの", band: "羊文学" },
    UN: { university: "Free Spirits", band: "フレデリック" },
    CleveRsound: { university: "下市", band: "ゲスの極み乙女" },
  },
  {
    time: "13:30–14:00",
    MEGAHERTZ: { university: "産医大", band: "相対性理論" },
    UN: { university: "So&Soes", band: "ヤバT" },
    CleveRsound: { university: "Free Apirits", band: "HIRO COMPLEX" },
  },
  {
    time: "14:00–14:30",
    MEGAHERTZ: { university: "Free Spirits", band: "Age factory" },
    UN: { university: "下市", band: "KALMA" },
    CleveRsound: { university: "ひびきの", band: "UNISON SQUARE GARDEN" },
  },
  {
    time: "14:30–15:00",
    MEGAHERTZ: { university: "福教大", band: "SEAPOOL" },
    UN: { university: "産医大", band: "オーラル" },
    CleveRsound: { university: "So&Soes", band: "カネヨリマサル" },
  },
  {
    time: "15:00–15:30",
    MEGAHERTZ: { university: "下市", band: "ヤバT" },
    UN: { university: "Free Spirits", band: "FURUITS ZIPPER" },
    CleveRsound: {
      university: "ひびきの",
      band: "はるかドットスティングレイ",
    },
  },
  {
    time: "15:30–16:00",
    MEGAHERTZ: { university: "So&Soes", band: "SIX LOUNGE" },
    UN: { university: "福教大", band: "アジカン" },
    CleveRsound: {
      university: "ひびきの",
      band: "Hump Back",
    },
  },
  {
    time: "16:00–16:30",
    MEGAHERTZ: { university: "Free Spirits", band: "TETORA" },
    UN: { university: "Free Spirits", band: "KOTORI" },
    CleveRsound: { university: "福教大", band: "RADWIMPS" },
  },
  {
    time: "16:30–17:00",
    MEGAHERTZ: { university: "So&Soes", band: "ウルフルズ" },
    UN: { university: "So&Soes", band: "the peggies" },
    CleveRsound: { university: "福教大", band: "あいくれ" },
  },
  {
    time: "17:00–17:30",
    MEGAHERTZ: { university: "-", band: "-" },
    UN: { university: "産医大", band: "Enth" },
    CleveRsound: { university: "-", band: "-" },
  },
];

export default function TimetablePage() {
  return (
    <div className='container mx-auto px-1 py-3 bg-white'>
      <h1 className='text-xl text-red-500 font-bold py-3 text-center bg-red-50'>
        未確定 CIRCUIT 2025
      </h1>

      {/* 背景画像を適用するコンテナ */}
      <div className='relative'>
        {/* 背景画像のdiv */}
        <div
          className='absolute inset-0 z-0 opacity-15'
          style={{
            backgroundImage: `url(/cercle.png)`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
        ></div>

        {/* 横スクロール可能なテーブルコンテナ */}
        <div className='relative z-10 overflow-x-auto pb-2'>
          <table className='w-full bg-transparent rounded-lg shadow text-xs border-spacing-y-4'>
            <thead className='bg-gray-400 text-white sticky top-0'>
              <tr>
                <th className='py-2 px-1 text-center whitespace-nowrap'>
                  time
                </th>
                {stages.map((stage) => (
                  <th
                    key={stage}
                    className={`my-2 px-1 text-xl whitespace-nowrap text-center text-white font-bold ${stageColors[stage]}`}
                  >
                    {stage}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {timetable.map((slot) => (
                <tr key={slot.time} className='border-b my-4'>
                  <td className='py-1 px-1 font-small whitespace-nowrap text-xs'>
                    {slot.time}
                  </td>
                  {stages.map((stage) => (
                    <td
                      key={stage}
                      className={`my-2 px-1 min-w-24 ${
                        slot[stage].university !== "-"
                          ? ` ${stageCellColors[stage]}`
                          : ""
                      }`}
                    >
                      {slot[stage].university !== "-" ? (
                        <>
                          <div className='py-1'>
                            <div className='text-sm font-bold truncate mb-2'>
                              {slot[stage].band}
                            </div>
                            <div className='text-xs text-gray-600 truncate'>
                              {slot[stage].university}
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className='text-gray-300 text-center'>-</div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 注意書き */}
      <div className='mt-2 text-center text-xs text-gray-600'>
        ※ 横にスクロールして全ステージを確認できます
      </div>
    </div>
  );
}
