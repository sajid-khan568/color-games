import React from 'react';

export default function Leaderboard() {
  const topUsers = [
    { name: '🥇 sajid_9630', score: 1500 },
    { name: '🥈 sana_4521', score: 1250 },
    { name: '🥉 altaf_841', score: 980 },
    { name: 'nanu12', score: 850 },
    { name: 'Ankit7896', score: 790 }
  ];

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-5 font-inter border border-gray-200">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">🏆 Leaderboard</h2>
        <span className="text-sm sm:text-base text-gray-500 font-medium">Top 5 Players</span>
      </div>

      <ul className="divide-y divide-gray-100">
        {topUsers.map((user, index) => (
          <li
            key={index}
            className="flex justify-between items-center py-3 px-3 hover:bg-gray-50 rounded-md transition-all duration-150 ease-in-out"
          >
            <span className="text-base font-semibold text-gray-700">{user.name}</span>
            <span className="text-purple-600 font-bold text-lg">₹{user.score}</span>
          </li>
        ))}
      </ul>

      <div className="text-center">
        <button className="text-sm sm:text-base font-medium text-blue-600 hover:text-blue-700 hover:underline transition duration-200">
          🔍 View Full Leaderboard
        </button>
      </div>
    </div>
  );
}
