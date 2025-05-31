"use client";
import { useState, useEffect } from "react";

export default function SequentialTextAnimation() {
  const [visibleElements, setVisibleElements] = useState([]);

  useEffect(() => {
    // 各要素を順番に表示するタイマー
    const timers = [
      setTimeout(() => setVisibleElements([0]), 800),
      setTimeout(() => setVisibleElements([0, 1]), 2000),
      setTimeout(() => setVisibleElements([0, 1, 2]), 3200),
    ];

    // クリーンアップ
    return () => timers.forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div className='min-h-screen flex flex-col justify-center items-center px-4'>
      <style jsx>{`
        @keyframes pulse-glow {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
          }
          100% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 0.8),
              0 0 30px rgba(255, 255, 255, 0.4);
          }
        }

        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        @keyframes bounce-in {
          0% {
            transform: translateY(20px) scale(0.9);
          }
          50% {
            transform: translateY(-10px) scale(1.05);
          }
          100% {
            transform: translateY(0) scale(1);
          }
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.8);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes shimmer {
          0% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.2);
          }
          100% {
            filter: brightness(1);
          }
        }
      `}</style>
      <h1
        className={`text-5xl sm:text-6xl md:text-8xl text-white font-bold drop-shadow-lg transition-all duration-1500 ease-out ${
          visibleElements.includes(0)
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-16 scale-75"
        }`}
        style={{
          animation: visibleElements.includes(0)
            ? " ease-in-out infinite alternate"
            : "none",
        }}
      >
        学生の今が,
      </h1>

      <h1
        className={`text-5xl pt-5 sm:text-6xl md:text-8xl drop-shadow-lg text-white font-bold transition-all duration-1500 ease-out ${
          visibleElements.includes(1)
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-20 scale-90"
        }`}
        style={{
          animation: visibleElements.includes(1)
            ? "bounce-in 0.8s ease-out"
            : "none",
        }}
      >
        音になる
      </h1>

      <p
        className={`text-2xl md:text-2xl text-white pt-7 mb-8 max-w-2xl mx-auto drop-shadow-md font-medium transition-all duration-1200 ease-out ${
          visibleElements.includes(2)
            ? "opacity-100 transform translate-y-0 scale-100"
            : "opacity-0 transform translate-y-12 scale-80"
        }`}
        style={{
          animation: visibleElements.includes(2)
            ? "fade-in-up 1s ease-out, shimmer 4s ease-in-out infinite"
            : "none",
        }}
      >
        2025-8-20
      </p>
    </div>
  );
}
