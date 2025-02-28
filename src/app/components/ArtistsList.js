import Link from "next/link";

export default function ArtistsList() {
  const artists = [
    {
      name: "アジカン",
      university: "九州工業大学",
      genre: "Alternative Rock",
      image: "/images/artist1.jpg", // Placeholder - will use dynamic images in real implementation
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

  // Function to get a placeholder image if artist image doesn't exist
  const getPlaceholderImage = (index) => {
    const colors = ["purple", "indigo", "pink", "red", "orange", "amber"];
    const colorIndex = index % colors.length;
    return `bg-${colors[colorIndex]}-100`;
  };

  return (
    <section className='py-12 bg-gray-50'>
      <div className='container mx-auto'>
        <h2 className='text-3xl font-bold'>Bands</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
          {artists.map((artist, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1'
            >
              <div className='h-48 overflow-hidden'>
                {/* Will use real images in production; for now, show colored backgrounds */}
                <div
                  className={`w-full h-full flex items-center justify-center ${getPlaceholderImage(
                    index
                  )}`}
                >
                  <span className='text-5xl'>🎵</span>
                </div>
              </div>

              <div className='p-6'>
                <span className='inline-block px-3 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800 mb-3'>
                  {artist.genre}
                </span>
                <h3 className='text-xl font-bold mb-2 text-gray-900 group-hover:text-purple-600 transition-colors'>
                  {artist.name}
                </h3>
                <div className='flex items-center text-gray-600 mb-4'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-4 w-4 mr-2'
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
                  <span>{artist.university}</span>
                </div>
                <Link
                  href={`/artists/${encodeURIComponent(artist.name)}`}
                  className='inline-block mt-2 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-colors'
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link href='/timetable' className='button-primary'>
            time table
          </Link>
        </div>
      </div>
    </section>
  );
}
