"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const instruments = [
  {
    name: "ギター",
    src: "/placeholder.svg?height=300&width=300",
    emoji: "🎸",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "ドラム",
    src: "/placeholder.svg?height=300&width=300",
    emoji: "🥁",
    color: "from-blue-500 to-purple-500",
  },
  {
    name: "ピアノ",
    src: "/placeholder.svg?height=300&width=300",
    emoji: "🎹",
    color: "from-green-500 to-teal-500",
  },
  {
    name: "サックス",
    src: "/placeholder.svg?height=300&width=300",
    emoji: "🎷",
    color: "from-yellow-500 to-pink-500",
  },
];

export default function MusicalInstrumentsAnimation() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= instruments.length - 1) {
          setIsPlaying(false);
          setShowAll(true);
          return prev;
        }
        return prev + 1;
      });
    }, 1200); // 各楽器を1.2秒間表示（テンポアップ）

    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const startAnimation = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
    setShowAll(false);
  };

  const resetAnimation = () => {
    setCurrentIndex(0);
    setIsPlaying(false);
    setShowAll(false);
  };

  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex flex-col items-center justify-center p-4 sm:p-8 overflow-hidden'>
      {/* ヘッダー */}
      <motion.div
        className='text-center mb-8 sm:mb-12 z-10'
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-2 sm:mb-4 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
          🎵 Musical Showcase 🎵
        </h1>
        <p className='text-sm sm:text-xl text-gray-300 px-4'>
          楽器が一つずつ大きく登場！
        </p>
      </motion.div>

      {/* メインアニメーション領域 */}
      <div className='relative w-full max-w-md sm:max-w-lg md:max-w-xl h-64 sm:h-80 md:h-96 flex items-center justify-center mb-8'>
        <AnimatePresence mode='wait'>
          {isPlaying && (
            <motion.div
              key={currentIndex}
              className='absolute inset-0 flex items-center justify-center'
              initial={{
                scale: 0.3,
                opacity: 0,
                x: currentIndex % 2 === 0 ? 300 : -300, // 偶数は右から、奇数は左から
                rotateY: currentIndex % 2 === 0 ? -90 : 90,
                y: 50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                x: 0,
                rotateY: 0,
                y: 0,
              }}
              exit={{
                scale: 0.8,
                opacity: 0,
                x: currentIndex % 2 === 0 ? -300 : 300, // 偶数は左へ、奇数は右へ退場
                rotateY: currentIndex % 2 === 0 ? 90 : -90,
                y: -30,
              }}
              transition={{
                duration: 0.6, // アニメーション速度アップ
                ease: "easeInOut",
              }}
            >
              {/* グロー効果 */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${instruments[currentIndex].color} rounded-full blur-2xl opacity-30 scale-150`}
              />

              {/* 楽器カード */}
              <div className='relative bg-white/10 backdrop-blur-lg rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20'>
                <div className='text-center'>
                  {/* 絵文字 */}
                  <motion.div
                    className='text-6xl sm:text-8xl md:text-9xl mb-4'
                    animate={{
                      rotate: [0, 10, -10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 1, // 1.5から1に短縮
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  >
                    {instruments[currentIndex].emoji}
                  </motion.div>

                  {/* 楽器画像 */}
                  <div className='relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto mb-4'>
                    <Image
                      src={instruments[currentIndex].src || "/placeholder.svg"}
                      alt={instruments[currentIndex].name}
                      fill
                      className='rounded-2xl object-cover'
                    />
                  </div>

                  {/* 楽器名 */}
                  <motion.h2
                    className={`text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r ${instruments[currentIndex].color} bg-clip-text text-transparent`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {instruments[currentIndex].name}
                  </motion.h2>
                </div>
              </div>

              {/* パーティクル効果 */}
              <div className='absolute inset-0 pointer-events-none'>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-r ${instruments[currentIndex].color} rounded-full`}
                    style={{
                      left: `${10 + (i % 4) * 25}%`,
                      top: `${10 + Math.floor(i / 4) * 30}%`,
                    }}
                    animate={{
                      y: [-20, -80, -20],
                      opacity: [0, 1, 0],
                      scale: [0, 1.5, 0],
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 1.5, // 2から1.5に短縮
                      delay: i * 0.08, // 0.1から0.08に短縮
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 全楽器表示 */}
        {showAll && (
          <motion.div
            className='grid grid-cols-2 gap-4 sm:gap-6 w-full'
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            {instruments.map((instrument, index) => (
              <motion.div
                key={instrument.name}
                className='bg-white/10 backdrop-blur-lg rounded-2xl p-3 sm:p-4 text-center border border-white/20'
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className='text-3xl sm:text-4xl mb-2'>
                  {instrument.emoji}
                </div>
                <div className='relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-2'>
                  <Image
                    src={instrument.src || "/placeholder.svg"}
                    alt={instrument.name}
                    fill
                    className='rounded-lg object-cover'
                  />
                </div>
                <p
                  className={`text-sm sm:text-base font-semibold bg-gradient-to-r ${instrument.color} bg-clip-text text-transparent`}
                >
                  {instrument.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>

      {/* プログレスバー */}
      {isPlaying && (
        <motion.div
          className='w-full max-w-md bg-white/20 rounded-full h-2 mb-6 overflow-hidden'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className='h-full bg-gradient-to-r from-yellow-400 to-pink-500 rounded-full'
            initial={{ width: "0%" }}
            animate={{
              width: `${((currentIndex + 1) / instruments.length) * 100}%`,
            }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      )}

      {/* コントロールボタン */}
      <div className='flex flex-col sm:flex-row gap-4 z-10'>
        {!isPlaying && !showAll && (
          <motion.button
            className='px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold rounded-full shadow-lg text-sm sm:text-base'
            onClick={startAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            🎵 アニメーション開始
          </motion.button>
        )}

        {(showAll || isPlaying) && (
          <motion.button
            className='px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-teal-600 text-white font-bold rounded-full shadow-lg text-sm sm:text-base'
            onClick={resetAnimation}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            🔄 リセット
          </motion.button>
        )}
      </div>

      {/* 背景の音符アニメーション */}
      <div className='fixed inset-0 pointer-events-none overflow-hidden'>
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className='absolute text-white/5 text-2xl sm:text-4xl'
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 0.2, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: Math.random() * 4,
              repeat: Number.POSITIVE_INFINITY,
              repeatDelay: Math.random() * 3,
            }}
          >
            {["🎵", "🎶", "🎼", "🎤"][Math.floor(Math.random() * 4)]}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
