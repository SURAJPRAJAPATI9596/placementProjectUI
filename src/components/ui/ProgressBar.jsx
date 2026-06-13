import React, { useEffect, useState } from "react";

const ProgressBar = ({
  score = 84,
  dark,
  circleSize = 50,
  textSize = "2xl",
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;

    const timer = setInterval(() => {
      value++;

      if (value >= score) {
        value = score;
        clearInterval(timer);
      }

      setProgress(value);
    }, 100);

    return () => clearInterval(timer);
  }, [score]);

  const radius = circleSize;
  const circumference = 2 * Math.PI * radius;

  const offset = circumference - (progress / 100) * circumference;

  return (
    <div
      className={`flex flex-col items-center justify-center p-8 rounded-2xl
      ${dark ? "bg-gray-900 text-white" : "bg-white text-black"}`}
    >
      <div className="relative w-52 h-52">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 200 200">
          {/* Background Circle */}

          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="currentColor"
            strokeWidth="18"
            fill="transparent"
            className="text-gray-300"
          />

          {/* Progress Circle */}

          <circle
            cx="100"
            cy="100"
            r={radius}
            stroke="url(#gradient)"
            strokeWidth="18"
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            className="transition-all duration-300"
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2563eb" />

              <stop offset="100%" stopColor="#9333ea" />
            </linearGradient>
          </defs>
        </svg>

        {/* Center Text */}

        <div
          className="
          absolute inset-0
          flex flex-col
          items-center
          justify-center"
        >
          <h1 className={`text-${textSize} font-bold`}>{progress}%</h1>

          <p className="text-sm opacity-70">Match</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
