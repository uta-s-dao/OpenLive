"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

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
      }
    };

    // Calculate initially
    calculateTimeLeft();

    // Set up interval to update countdown
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up interval
    return () => clearInterval(timer);
  }, [targetDate]);

  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  return (
    <div className='flex justify-center gap-4 md:gap-6'>
      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg'>
          {formatNumber(timeLeft.days)}
        </div>
        <span className='text-white text-sm mt-2'>Days</span>
      </div>

      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg'>
          {formatNumber(timeLeft.hours)}
        </div>
        <span className='text-white text-sm mt-2'>Hours</span>
      </div>

      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg'>
          {formatNumber(timeLeft.minutes)}
        </div>
        <span className='text-white text-sm mt-2'>Minutes</span>
      </div>

      <div className='flex flex-col items-center'>
        <div className='w-16 h-16 md:w-20 md:h-20 bg-white/20 backdrop-blur-lg rounded-lg flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg'>
          {formatNumber(timeLeft.seconds)}
        </div>
        <span className='text-white text-sm mt-2'>Seconds</span>
      </div>
    </div>
  );
}
