"use client";
// src/app/components/CountdownTimer.js
import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isPulse, setIsPulse] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });

        // 秒が変わるごとに点滅効果を追加
        setIsPulse(true);
        const timer = setTimeout(() => setIsPulse(false), 500);
        return () => clearTimeout(timer);
      }
    };

    // 最初に計算
    calculateTimeLeft();

    // カウントダウン更新用のインターバル設定
    const timer = setInterval(calculateTimeLeft, 1000);

    // クリーンアップ
    return () => clearInterval(timer);
  }, [targetDate, timeLeft.seconds]);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className='flex justify-center gap-3 md:gap-6'>
      <CountdownBox
        label='日'
        value={formatNumber(timeLeft.days)}
        isPulse={
          isPulse &&
          timeLeft.seconds === 59 &&
          timeLeft.minutes === 59 &&
          timeLeft.hours === 23
        }
      />
      <CountdownBox
        label='時間'
        value={formatNumber(timeLeft.hours)}
        isPulse={isPulse && timeLeft.seconds === 59 && timeLeft.minutes === 59}
      />
      <CountdownBox
        label='分'
        value={formatNumber(timeLeft.minutes)}
        isPulse={isPulse && timeLeft.seconds === 59}
      />
      <CountdownBox
        label='秒'
        value={formatNumber(timeLeft.seconds)}
        isPulse={isPulse}
      />
    </div>
  );
}

function CountdownBox({ label, value, isPulse }) {
  return (
    <div className='flex flex-col items-center'>
      <div
        className={`w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg transition-all ${
          isPulse ? "bg-white/30 scale-105" : ""
        }`}
      >
        {value}
      </div>
      <span className='text-white text-xs md:text-sm mt-2 font-medium'>
        {label}
      </span>
    </div>
  );
}
