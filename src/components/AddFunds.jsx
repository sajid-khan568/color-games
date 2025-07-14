import React from 'react';

export default function AddFunds() {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-5 font-inter">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">💰 Add Funds to Wallet</h2>

      <input
        type="number"
        placeholder="Enter amount (₹)"
        min="0"
        step="0.01"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 outline-none text-base"
      />

      <button
        className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition-all duration-200 font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Add Funds
      </button>
    </div>
  );
}
