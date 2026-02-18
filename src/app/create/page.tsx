"use client";
import { useState, useRef } from "react";
import { Noto_Serif_JP } from "next/font/google";

const playfair = Noto_Serif_JP({
  weight: ["400", "700"],
  subsets: ["cyrillic"],
});

type TimeTableRow = {
  time: string;
  bandName: string;
  university: string;
};

const BG_IMAGES = [
  { label: "concert", value: "/pexels-bdna-2807495.jpg" },
  { label: "live 11", value: "/11.jpg" },
  { label: "live 1", value: "/1.jpg" },
  { label: "header", value: "/header.jpg" },
  { label: "openlive", value: "/openlive.jpg" },
];

const DEFAULT_ROWS: TimeTableRow[] = [
  { time: "11:30", bandName: "", university: "" },
];

export default function CreatePage() {
  const [title, setTitle] = useState("1年生ライブ");
  const [eventInfo, setEventInfo] = useState("2/19 (土) @ LIVE SPOT WOW! TICKET: ¥1000 + (1drink600)");
  const [bgImage, setBgImage] = useState(BG_IMAGES[0].value);
  const [bgOpacity, setBgOpacity] = useState(50);
  const [rows, setRows] = useState<TimeTableRow[]>(DEFAULT_ROWS);
  const [showPreview, setShowPreview] = useState(false);
  const [showUniversity, setShowUniversity] = useState(true);
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setUploadedImages((prev) => [...prev, url]);
    setBgImage(url);
    // 同じファイルを再選択できるようにvalueをリセット
    e.target.value = "";
  };

  const addRow = () => {
    const lastTime = rows[rows.length - 1]?.time ?? "";
    let nextTime = "";
    const match = lastTime.match(/^(\d{1,2}):(\d{2})$/);
    if (match) {
      const totalMin = parseInt(match[1]) * 60 + parseInt(match[2]) + 30;
      const h = Math.floor(totalMin / 60) % 24;
      const m = totalMin % 60;
      nextTime = `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
    }
    setRows([...rows, { time: nextTime, bandName: "", university: "" }]);
  };

  const removeRow = (index: number) => {
    setRows(rows.filter((_, i) => i !== index));
  };

  const updateRow = (
    index: number,
    field: keyof TimeTableRow,
    value: string
  ) => {
    setRows(rows.map((row, i) => (i === index ? { ...row, [field]: value } : row)));
  };

  return (
    <div className={`${playfair.className} min-h-screen bg-gray-50`}>
      {/* ヘッダー */}
      <div className="bg-white border-b px-4 py-4 flex items-center justify-between max-w-screen-xl mx-auto">
        <h1 className="text-2xl pt-20 font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
          タイムテーブル作成
        </h1>
        <button
          onClick={() => setShowPreview(!showPreview)}
          className={`px-5 mt-10py-2 rounded-full text-sm font-bold border transition ${
            showPreview
              ? "bg-red-500 text-white border-red-500"
              : "bg-white text-red-500 border-red-400 hover:bg-red-50"
          }`}
        >
          {showPreview ? "編集に戻る" : "プレビュー"}
        </button>
      </div>

      <div className="max-w-screen-xl mx-auto px-4 py-8">
        {!showPreview ? (
          /* 編集画面 */
          <div className="max-w-2xl mx-auto space-y-6">

            {/* 基本設定 */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-base font-bold text-gray-700 mb-4 border-b pb-2">基本設定</h2>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 mb-1">タイトル</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="例: 1年生ライブ"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">イベント情報</label>
                <input
                  type="text"
                  value={eventInfo}
                  onChange={(e) => setEventInfo(e.target.value)}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
                  placeholder="例: 2/19 (土) @ LIVE SPOT WOW!"
                />
              </div>
            </div>

            {/* 背景設定 */}
            <div className="bg-white rounded-2xl shadow p-6">
              <h2 className="text-base font-bold text-gray-700 mb-4 border-b pb-2">背景設定</h2>
              <div className="mb-4">
                <label className="block text-xs font-semibold text-gray-500 mb-2">背景画像</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                  {BG_IMAGES.map((img) => (
                    <button
                      key={img.value}
                      onClick={() => setBgImage(img.value)}
                      className={`relative rounded-lg overflow-hidden border-2 transition ${
                        bgImage === img.value
                          ? "border-red-500 ring-2 ring-red-300"
                          : "border-gray-200"
                      }`}
                      style={{ height: "60px" }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${img.value}')` }}
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-end p-0.5">
                        <span className="text-white text-[10px] font-bold leading-tight">
                          {img.label}
                        </span>
                      </div>
                    </button>
                  ))}

                  {/* アップロード済み写真（複数対応） */}
                  {uploadedImages.map((url, i) => (
                    <button
                      key={url}
                      onClick={() => setBgImage(url)}
                      className={`relative rounded-lg overflow-hidden border-2 transition ${
                        bgImage === url
                          ? "border-red-500 ring-2 ring-red-300"
                          : "border-gray-200"
                      }`}
                      style={{ height: "60px" }}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url('${url}')` }}
                      />
                      <div className="absolute inset-0 bg-black/50 flex items-end p-0.5">
                        <span className="text-white text-[10px] font-bold leading-tight">
                          写真{i + 1}
                        </span>
                      </div>
                    </button>
                  ))}

                  {/* 写真追加ボタン */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    className="relative rounded-lg border-2 border-dashed border-gray-300 hover:border-red-400 hover:bg-red-50 transition flex flex-col items-center justify-center gap-0.5"
                    style={{ height: "60px" }}
                  >
                    <span className="text-2xl text-gray-400 leading-none">+</span>
                    <span className="text-[10px] text-gray-400 font-semibold text-center px-1">
                      写真を選ぶ
                    </span>
                  </button>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 mb-1">
                  透明度: <span className="text-red-500 font-bold">{bgOpacity}%</span>
                </label>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={bgOpacity}
                  onChange={(e) => setBgOpacity(Number(e.target.value))}
                  className="w-full accent-red-500"
                />
                <div className="flex justify-between text-xs text-gray-400 mt-0.5">
                  <span>透明 (0%)</span>
                  <span>不透明 (100%)</span>
                </div>
              </div>
            </div>

            {/* タイムテーブル */}
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex items-center justify-between mb-4 border-b pb-2">
                <h2 className="text-base font-bold text-gray-700">タイムテーブル</h2>
                <button
                  onClick={() => setShowUniversity(!showUniversity)}
                  className={`px-3 py-1 rounded-full text-xs font-bold border transition ${
                    showUniversity
                      ? "bg-gray-100 text-gray-500 border-gray-300 hover:bg-gray-200"
                      : "bg-red-500 text-white border-red-500 hover:bg-red-600"
                  }`}
                >
                  {showUniversity ? "大学名を隠す" : "大学名を表示"}
                </button>
              </div>
              <div className="space-y-3">
                {rows.map((row, index) => (
                  /* スマホ・PC共通: 横並びグリッド */
                  <div key={index} className={`grid gap-1 items-end md:gap-2 md:items-center border border-gray-200 rounded-xl px-2 py-2 md:border-0 md:p-0 md:rounded-none ${showUniversity ? "grid-cols-[1.5rem_3.5rem_1fr_4.5rem_1.5rem] md:grid-cols-[2rem_5rem_1fr_6rem_2rem]" : "grid-cols-[1.5rem_3.5rem_1fr_1.5rem] md:grid-cols-[2rem_5rem_1fr_2rem]"}`}>
                    {/* 行番号 */}
                    <span className="text-xs text-gray-400 font-semibold text-center self-center pb-1 md:pb-0">{index + 1}</span>
                    {/* 時間 */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-0.5">時間</label>
                      <input
                        type="text"
                        value={row.time}
                        onChange={(e) => updateRow(index, "time", e.target.value)}
                        placeholder="11:30"
                        className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 font-mono md:px-3 md:py-1.5"
                      />
                    </div>
                    {/* バンド名 */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-0.5">バンド名</label>
                      <input
                        type="text"
                        value={row.bandName}
                        onChange={(e) => updateRow(index, "bandName", e.target.value)}
                        placeholder="バンド名"
                        className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 md:px-3 md:py-1.5"
                      />
                    </div>
                    {/* 大学名 */}
                    {showUniversity && (
                      <div>
                        <label className="block text-xs text-gray-400 mb-0.5">大学名</label>
                        <input
                          type="text"
                          value={row.university}
                          onChange={(e) => updateRow(index, "university", e.target.value)}
                          placeholder="大学名"
                          className="w-full border border-gray-300 rounded-lg px-2 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-400 md:px-3 md:py-1.5"
                        />
                      </div>
                    )}
                    {/* 削除ボタン */}
                    <button
                      onClick={() => removeRow(index)}
                      disabled={rows.length === 1}
                      className="text-gray-300 hover:text-red-500 disabled:opacity-20 transition text-base font-bold leading-none text-center self-center pb-1 md:pb-0"
                      aria-label="削除"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
              <button
                onClick={addRow}
                className="mt-4 w-full py-2 border-2 border-dashed border-gray-300 rounded-lg text-sm text-gray-400 hover:border-red-400 hover:text-red-500 transition font-semibold"
              >
                + 行を追加
              </button>
            </div>

            <button
              onClick={() => setShowPreview(true)}
              className="w-full py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white text-lg font-black rounded-2xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              プレビューを見る
            </button>
          </div>
        ) : (
          /* プレビュー画面 */
          <div className="max-w-2xl mx-auto">
            <section className="py-10 relative overflow-hidden">
              <h2 className="text-4xl md:text-6xl font-black text-center mb-10 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                TIME TABLE
              </h2>

              <div className="relative overflow-hidden">
                {/* 背景画像 */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${bgImage}')`,
                    opacity: bgOpacity / 100,
                  }}
                />

                {/* ヘッダー */}
                <div className="z-10 relative m-2 text-red-500">
                  <div className="flex flex-col justify-center items-center gap-2 pb-4">
                    <h3 className="text-2xl pt-4 text-center font-bold">{title}</h3>
                    <div className="text-sm md:text-lg font-semibold text-center">{eventInfo}</div>
                  </div>
                </div>

                {/* テーブル */}
                <div className="z-10 relative">
                  <table className="min-w-full">
                    <tbody>
                      {rows.map((item, index) => (
                        <tr
                          key={index}
                          className="hover:bg-gradient-to-r hover:from-red-50 hover:to-pink-50 transition-all duration-300 group border-b border-gray-200"
                        >
                          <td className="px-2 py-3 whitespace-nowrap text-sm font-semibold text-gray-700 relative">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <span className="font-mono">{item.time || "--:--"}</span>
                          </td>
                          <td className="px-2 py-3 whitespace-nowrap text-base font-black text-black group-hover:text-red-700 transition-colors duration-300">
                            <div className="flex items-center space-x-2">
                              <div className="w-1 h-1 bg-red-500 rounded-full flex-shrink-0" />
                              <span>{item.bandName || "(バンド名)"}</span>
                            </div>
                          </td>
                          {showUniversity && (
                            <td className="px-2 py-3 whitespace-nowrap text-sm font-bold text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                              {item.university || "(大学名)"}
                            </td>
                          )}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            <button
              onClick={() => setShowPreview(false)}
              className="w-full py-3 border-2 border-gray-300 rounded-2xl text-sm text-gray-500 hover:border-red-400 hover:text-red-500 transition font-semibold"
            >
              編集に戻る
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
