"use client";
import { useState, useEffect, useMemo } from "react";

export default function SequentialTextAnimation() {
  const [visibleChars, setVisibleChars] = useState([]);
  const [landedChars, setLandedChars] = useState([]);
  const [showDate, setShowDate] = useState(false);
  const [animationsComplete, setAnimationsComplete] = useState(false);

  const mainText = "オープンライブ";
  const chars = useMemo(() => mainText.split(""), []);
  // const chars = mainText.split("");

  useEffect(() => {
    // 各文字を順番に表示するタイマー
    const charTimers = chars.map((_, index) =>
      setTimeout(() => {
        setVisibleChars((prev) => [...prev, index]);

        setTimeout(() => {
          setLandedChars((prev) => [...prev, index]);
        }, 300); // fly-from-frontアニメーションの終了タイミング
      }, 600 + index * 70)
    );

    // 日付を表示
    const dateTimer = setTimeout(() => {
      setShowDate(true);
    }, 200 + chars.length * 80 + 700); // 少し遅らせる

    // 全てのアニメーションが完了したらクリーンな状態にする
    const cleanupTimer = setTimeout(() => {
      setAnimationsComplete(true);
    }, 100 + chars.length * 50 + 500 + 3000); // 光る効果を楽しむ時間を増やす

    // クリーンアップ
    return () => {
      charTimers.forEach((timer) => clearTimeout(timer));
      clearTimeout(dateTimer);
      clearTimeout(cleanupTimer);
    };
  }, [chars]);

  return (
    <div
      className='min-h-screen flex flex-col justify-center items-center px-4'
      style={{ perspective: "1000px" }}
    >
      <style jsx>{`
        @keyframes fly-from-front {
          0% {
            transform: translateZ(800px) translateY(-100px) scale(3)
              rotateX(45deg);
            opacity: 0;
            filter: brightness(4) blur(20px);
          }
          30% {
            transform: translateZ(400px) translateY(-50px) scale(2)
              rotateX(25deg);
            opacity: 0.7;
            filter: brightness(3) blur(10px);
          }
          70% {
            transform: translateZ(100px) translateY(-10px) scale(1.2)
              rotateX(5deg);
            opacity: 1;
            filter: brightness(2) blur(3px);
          }
          85% {
            transform: translateZ(-20px) translateY(5px) scale(0.95)
              rotateX(-2deg);
            filter: brightness(1.5) blur(1px);
          }
          100% {
            transform: translateZ(0px) translateY(0px) scale(1) rotateX(0deg);
            opacity: 1;
            filter: brightness(1) blur(0px);
          }
        }

        @keyframes impact-3d-shake {
          0%,
          100% {
            transform: translateZ(0px) translateX(0) translateY(0) rotateX(0deg)
              rotateY(0deg);
          }
          10% {
            transform: translateZ(-10px) translateX(-4px) translateY(-3px)
              rotateX(2deg) rotateY(-1deg);
          }
          20% {
            transform: translateZ(10px) translateX(4px) translateY(3px)
              rotateX(-2deg) rotateY(1deg);
          }
          30% {
            transform: translateZ(-5px) translateX(-2px) translateY(-2px)
              rotateX(1deg) rotateY(-0.5deg);
          }
          40% {
            transform: translateZ(5px) translateX(2px) translateY(2px)
              rotateX(-1deg) rotateY(0.5deg);
          }
          50% {
            transform: translateZ(-3px) translateX(-1px) translateY(-1px)
              rotateX(0.5deg) rotateY(-0.2deg);
          }
          60% {
            transform: translateZ(3px) translateX(1px) translateY(1px)
              rotateX(-0.5deg) rotateY(0.2deg);
          }
          70% {
            transform: translateZ(-1px) translateX(-0.5px) translateY(0px)
              rotateX(0.2deg) rotateY(-0.1deg);
          }
          80% {
            transform: translateZ(1px) translateX(0.5px) translateY(0px)
              rotateX(-0.2deg) rotateY(0.1deg);
          }
          90% {
            transform: translateZ(-0.5px) translateX(0px) translateY(-0.5px)
              rotateX(0.1deg) rotateY(0deg);
          }
        }

        @keyframes intense-3d-glow {
          0% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.9),
              0 0 20px rgba(255, 255, 255, 0.7),
              0 0 30px rgba(255, 255, 255, 0.5),
              0 0 40px rgba(255, 150, 150, 0.3);
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
          }
          50% {
            text-shadow: 0 0 20px rgba(255, 255, 255, 1),
              0 0 40px rgba(255, 255, 255, 0.9),
              0 0 60px rgba(255, 255, 255, 0.8),
              0 0 80px rgba(255, 100, 100, 0.6),
              0 0 100px rgba(255, 50, 50, 0.4), 0 0 120px rgba(255, 0, 0, 0.3);
            filter: drop-shadow(0 0 30px rgba(255, 255, 255, 0.9));
          }
          100% {
            text-shadow: 0 0 10px rgba(255, 255, 255, 0.9),
              0 0 20px rgba(255, 255, 255, 0.7),
              0 0 30px rgba(255, 255, 255, 0.5),
              0 0 40px rgba(255, 150, 150, 0.3);
            filter: drop-shadow(0 0 15px rgba(255, 255, 255, 0.5));
          }
        }

        @keyframes shockwave-3d {
          0% {
            transform: translateZ(0px) scale(0) rotateX(0deg);
            opacity: 0.8;
          }
          50% {
            transform: translateZ(-50px) scale(1.5) rotateX(15deg);
            opacity: 0.4;
          }
          100% {
            transform: translateZ(-100px) scale(2.5) rotateX(30deg);
            opacity: 0;
          }
        }

        @keyframes landing-flash {
          0% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            text-shadow: 0 0 30px rgba(255, 255, 255, 1),
              0 0 50px rgba(255, 255, 255, 0.8),
              0 0 70px rgba(255, 200, 100, 0.6);
          }
          100% {
            text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
        }

        @keyframes date-zoom-in {
          0% {
            transform: translateZ(1000px) scale(5) rotateY(180deg);
            opacity: 0;
            filter: brightness(5) blur(30px);
          }
          40% {
            transform: translateZ(200px) scale(2) rotateY(45deg);
            opacity: 0.8;
            filter: brightness(3) blur(10px);
          }
          80% {
            transform: translateZ(-20px) scale(1.1) rotateY(-5deg);
            opacity: 1;
            filter: brightness(1.5) blur(2px);
          }
          100% {
            transform: translateZ(0px) scale(1) rotateY(0deg);
            opacity: 1;
            filter: brightness(1) blur(0px);
          }
        }

        .char-container {
          position: relative;
          display: inline-block;
          transform-style: preserve-3d;
        }

        .char-container::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 120px;
          height: 120px;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.4) 0%,
            rgba(255, 100, 100, 0.2) 30%,
            transparent 70%
          );
          border-radius: 50%;
          transform: translate(-50%, -50%) translateZ(0px) scale(0);
          pointer-events: none;
          z-index: -1;
        }

        .char-visible::after {
          animation: shockwave-3d 1s ease-out;
        }

        .main-container {
          transform-style: preserve-3d;
        }

        /* アニメーション完了後のクリーンな状態 */
        .animations-complete {
          animation: none !important;
          transform: none !important;
          filter: none !important;
          text-shadow: none !important;
        }
      `}</style>

      <div className='main-container text-4xl sm:text-5xl md:text-8xl font-bold mb-8'>
        {chars.map((char, index) => (
          <span
            key={index}
            className={`char-container inline-block text-gray-300 drop-shadow-lg ${
              visibleChars.includes(index) ? "char-visible" : ""
            } ${animationsComplete ? "animations-complete" : ""}`}
            style={{
              opacity: visibleChars.includes(index) ? 1 : 0,
              animation: animationsComplete
                ? "none"
                : (() => {
                    let animations = [];

                    // 飛来アニメーション
                    if (visibleChars.includes(index)) {
                      animations.push(`fly-from-front 0.4s ease-out`);
                    }

                    // 着地時の衝撃アニメーション
                    if (visibleChars.includes(index)) {
                      animations.push(`impact-3d-shake 0.3s ease-out 0.3s`);
                    }

                    // 着地時の一瞬の光フラッシュ
                    if (landedChars.includes(index)) {
                      animations.push(`landing-flash 0.2s ease-out 0.45s`);
                    }

                    return animations.length > 0
                      ? animations.join(", ")
                      : "none";
                  })(),
              transformStyle: "preserve-3d",
            }}
          >
            {char}
          </span>
        ))}
      </div>

      <div
        className={`text-3xl md:text-4xl text-gray-300 font-bold transition-all duration-1000 ${
          showDate ? "opacity-100" : "opacity-0"
        } ${animationsComplete ? "animations-complete" : ""}`}
        style={{
          animation: animationsComplete
            ? "none"
            : (() => {
                let animations = [];

                // 飛来アニメーション
                if (showDate) {
                  animations.push(`date-zoom-in 0.4s ease-out`);
                }

                // 着地時の一瞬の光フラッシュ
                if (showDate) {
                  animations.push(`landing-flash 0.2s ease-out 0.4s`);
                }

                return animations.length > 0 ? animations.join(", ") : "none";
              })(),
          transformStyle: "preserve-3d",
          textShadow: animationsComplete ? "none" : "none",
        }}
      >
        8/20
      </div>
    </div>
  );
}
