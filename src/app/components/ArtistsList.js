// src/app/components/ArtistsList.js
import Link from "next/link";
// import Image from "next/image";


export default function ArtistsList() {
  const artists = [
    {
      name: "アジカン",
      university: "九州工業大学",
      genre: "Alternative Rock",
      image: "/images/artist1.jpg", // プレースホルダー - 実際の実装では動的画像を使用
    },
    {
      name: "04 Limited Sazabys",
      university: "歯科大ROM",
      genre: "Punk Rock",
      image: "/images/artist2.jpg",
    },
    {
      name: "ONE OK ROCK",
      university: "北九州市立大学",
      genre: "Rock",
      image: "/images/artist3.jpg",
    },
    {
      name: "ハンブレッターズ",
      university: "福岡教育大学",
      genre: "Indie Rock",
      image: "/images/artist4.jpg",
    },
    {
      name: "クリープハイプ",
      university: "九州女子大学",
      genre: "Alt Rock",
      image: "/images/artist5.jpg",
    },
    {
      name: "ポルカドットスティングレイ",
      university: "産業医科大学",
      genre: "Art Rock",
      image: "/images/artist6.jpg",
    },
  ];

  // アーティスト画像がない場合のプレースホルダー画像取得
  const getPlaceholderImage = (index) => {
    const colors = [
      "from-purple-400 to-pink-400",
      "from-indigo-400 to-cyan-400",
      "from-pink-400 to-rose-400",
      "from-red-400 to-orange-400",
      "from-orange-400 to-amber-400",
      "from-teal-400 to-emerald-400",
    ];
    const colorIndex = index % colors.length;
    return `bg-gradient-to-br ${colors[colorIndex]}`;
  };

  return (
    <section className='py-16 md:py-20 bg-gray-50'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title'>出演バンド</h2>
        <p className='text-gray-600 mb-10 max-w-2xl'>
          15大学から集まった精鋭バンドたちが、一日限りの特別なステージを披露します。
          それぞれ個性あふれるパフォーマンスをお楽しみください。
        </p>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {artists.map((artist, index) => (
            <Link
              href={`/artists/${encodeURIComponent(artist.name)}`}
              key={index}
              className='group artist-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl'
            >
              <div className='h-48 overflow-hidden'>
                {/* 実際の実装では実際の画像を使用。今はカラフルな背景を表示 */}
                <div
                  className={`w-full h-full artist-image flex items-center justify-center ${getPlaceholderImage(
                    index
                  )}`}
                >
                  <span className='text-6xl'>🎵</span>
                </div>
              </div>

              <div className='p-5'>
                <div className='flex justify-between items-start mb-3'>
                  <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800'>
                    {artist.genre}
                  </span>
                  <svg
                    className='w-5 h-5 text-gray-400 group-hover:text-purple-600 transition-colors'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M14 5l7 7m0 0l-7 7m7-7H3'
                    />
                  </svg>
                </div>

                <h3 className='text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors'>
                  {artist.name}
                </h3>

                <div className='flex items-center text-gray-600 mb-1'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 mr-2 text-gray-500'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
                    />
                  </svg>
                  <span className='text-sm'>{artist.university}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
