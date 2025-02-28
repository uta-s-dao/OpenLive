"use client";
import { useState } from "react";

export default function HighlightsSection() {
  const [activeTab, setActiveTab] = useState(0);

  const highlights = [
    {
      year: "2024",
      description:
        "過去最大の大学が参加しました。場所は西小倉のwowというところで行いなした。",
      stats: [
        { label: "Attendees", value: "150" },
        { label: "Bands", value: "12" },
        { label: "Universities", value: "14" },
      ],
      gallery: [
        { src: "/S__23707650.jpg", alt: "Crowd at 2024 festival" },
        { src: "/S__23707650.jpg", alt: "Main stage performance" },
        { src: "/S__23707650.jpg", alt: "Backstage moments" },
      ],
    },

    {
      year: "2023",
      description: "数多くのレベルの高いバンドが出演し大きく盛り上がりました",
      stats: [
        { label: "Attendees", value: "120" },
        { label: "Bands", value: "12" },
        { label: "Universities", value: "10" },
      ],
      gallery: [
        { src: "/S__23707650.jpg", alt: "2023 festival opening" },
        { src: "/S__23707650.jpg", alt: "Acoustic performance" },
        { src: "/S__23707650.jpg", alt: "Audience enjoying the show" },
      ],
    },
    {
      year: "2022",
      description:
        "初めてのオープンライブで、みんなで力を合わせてオープンライブを作り上げました",
      stats: [
        { label: "Attendees", value: "100" },
        { label: "Bands", value: "12" },
        { label: "Universities", value: "10" },
      ],
      gallery: [
        { src: "/S__23707650.jpg", alt: "Return of live music in 2022" },
        { src: "/S__23707650.jpg", alt: "Student band performing" },
        { src: "/S__23707650.jpg", alt: "Festival grounds" },
      ],
    },
  ];

  const currentHighlight = highlights[activeTab];

  return (
    <section className='py-20 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-2xl md:text-3xl font-bold mb-6 text-center text-gray-900'>
          Previous Festivals
        </h2>

        {/* Tabs */}
        <div className='flex justify-center mb-8'>
          <div className='inline-flex rounded-lg border border-gray-200 overflow-hidden'>
            {highlights.map((highlight, index) => (
              <button
                key={index}
                className={`px-6 py-3 text-sm font-medium ${
                  activeTab === index
                    ? "bg-purple-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {highlight.year}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
          {/* Stats */}
          <div className='lg:col-span-1'>
            <div className='bg-white rounded-xl shadow-md p-6 h-full'>
              <h3 className='text-2xl font-bold mb-4 text-purple-600'>
                {currentHighlight.year} Highlights
              </h3>
              <p className='text-gray-700 mb-6'>
                {currentHighlight.description}
              </p>

              <div className='space-y-4'>
                {currentHighlight.stats.map((stat, index) => (
                  <div key={index} className='flex items-center'>
                    <div className='w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mr-4'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='h-6 w-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth={2}
                          d='M5 13l4 4L19 7'
                        />
                      </svg>
                    </div>
                    <div>
                      <p className='text-sm text-gray-600'>{stat.label}</p>
                      <p className='text-2xl font-bold text-gray-900'>
                        {stat.value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
