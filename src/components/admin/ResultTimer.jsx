import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function ResultTimer() {
  const [duration, setDuration] = useState(120); // in seconds
  const [remaining, setRemaining] = useState(duration);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && remaining > 0) {
      timer = setInterval(() => {
        setRemaining((prev) => prev - 1);
      }, 1000);
    } else if (remaining === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, remaining]);

  const handleStart = () => {
    setRemaining(duration);
    setIsRunning(true);
  };

  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const sec = secs % 60;
    return `${String(mins).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-4 sm:p-5 rounded-lg shadow-md w-full max-w-5xl mx-auto space-y-4 font-inter">
      <h2 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <Clock className="text-purple-600" /> Result Timer
      </h2>

      <div className="flex flex-col sm:flex-row items-center gap-3 justify-between">
        <div className="text-center">
          <p className="text-sm text-gray-600">Round Duration (seconds)</p>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(parseInt(e.target.value) || 0)}
            className="mt-1 px-3 py-2 border border-gray-300 rounded-md text-center w-32 focus:outline-none focus:ring-2 focus:ring-purple-400"
            min={10}
          />
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-600">Time Remaining</p>
          <div className="mt-1 text-2xl font-bold text-purple-700">
            {formatTime(remaining)}
          </div>
        </div>

        <button
          onClick={handleStart}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold"
        >
          Start New Round
        </button>
      </div>

      {remaining === 0 && (
        <div className="text-center text-sm text-red-600 font-medium">
          ⏰ Time's up! Round has ended.
        </div>
      )}
    </div>
  );
}
