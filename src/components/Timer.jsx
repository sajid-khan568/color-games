import React, { useState, useEffect } from 'react';

export default function Timer({ duration = 120, onEnd }) {
  const [seconds, setSeconds] = useState(duration);

  useEffect(() => {
    if (seconds <= 0) {
      onEnd?.();
      return;
    }

    const timer = setInterval(() => setSeconds((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [seconds, onEnd]);

  const formatTime = (s) => {
    const min = Math.floor(s / 60);
    const sec = s % 60;
    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div className="text-center">
      <p className="text-sm font-medium text-gray-700">⏳ Time Left</p>
      <p className="text-2xl font-bold text-red-600">{formatTime(seconds)}</p>
    </div>
  )}