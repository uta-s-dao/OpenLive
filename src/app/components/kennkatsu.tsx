"use client";
import Img from "next/image";

export default function Kyousann() {
  const company = [
    {
      name: "健活モニター",
      information: "たくさんの学生が参加✨福岡・熊本の治験募集中です",
      logo: "/kennkatsu.png",
      url: "https://kenkatsu-monitor.com/",
    },
  ];

  return (
    <section className='py-10 bg-gradient-to-br from-red-50 to-rose-50'>
      <div className='container mx-auto px-4'>
        <h2 className='section-title'>協賛企業</h2>
      </div>
      <div className='container mx-auto px-4 mt-8'>
        {company.map((item, index) => (
          <div
            key={index}
            className='bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 overflow-hidden'
          >
            <div className='flex items-center min-w-0 sm:space-x-12 md:space-x-12 lg:space-x-24 xl:space-x-60'>
              <div className='flex-shrink-0 w-40 sm:w-48 md:w-56 lg:w-64 xl:w-72'>
                <Img
                  src={item.logo}
                  alt={`${item.name}のロゴ`}
                  width={160}
                  height={160}
                  className='w-full h-auto object-contain'
                />
              </div>
              <div className='flex-1 min-w-0 mr-auto'>
                <h3 className='text-xl font-bold text-gray-800 mb-2 truncate'>
                  {item.name}
                </h3>
                <p className='text-gray-600 mb-3 break-words'>
                  {item.information}
                </p>
                <a
                  href={item.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='inline-flex items-center px-4 py-2 bg-red-400 text-white rounded-lg hover:bg-red-500 transition-colors duration-200 text-sm font-medium'
                >
                  サイトを見る
                  <svg
                    className='ml-2 w-4 h-4'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14'
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
