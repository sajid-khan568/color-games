import React, { useState, useEffect } from 'react';

export default function RoundStatus() {
  const [isLive, setIsLive] = useState(true);
  const [countdown, setCountdown] = useState(120); 

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else {
      setIsLive(false);
      setTimeout(() => {
        setCountdown(120);
        setIsLive(true);
      }, 10000);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-4 font-inter text-center">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
        {isLive ? '🟢 Live Round' : '⏳ Upcoming Round'}
      </h2>

      <p className="text-sm text-gray-600">
        {isLive
          ? `Time Left: ${Math.floor(countdown / 60).toString().padStart(2, '0')}:${(countdown % 60).toString().padStart(2, '0')}`
          : 'Next round starts in 10 seconds...'}
      </p>

      <button
        disabled={!isLive}
        className={`w-full py-2 rounded-md text-white font-medium text-sm shadow-md transition-all duration-200 ${
          isLive ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        {isLive ? 'Predict Now' : 'Waiting for Next Round...'}
      </button>
    </div>
  );
}