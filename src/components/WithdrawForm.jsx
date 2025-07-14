import React, { useState } from 'react';

export default function WithdrawForm() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawError, setWithdrawError] = useState('');

  const handleWithdraw = () => {
    const amount = parseFloat(withdrawAmount);
    if (!withdrawAmount) {
      setWithdrawError('⚠️ Please enter an amount');
    } else if (isNaN(amount) || amount <= 0) {
      setWithdrawError('⚠️ Enter a valid amount greater than ₹0');
    } else {
      setWithdrawError('');
      console.log('✅ Withdraw request:', amount);
    setWithdrawAmount('');
    }
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-4 font-inter border border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">🏧 Withdraw Funds</h2>

      <input
        type="number"
        value={withdrawAmount}
        onChange={(e) => setWithdrawAmount(e.target.value)}
        placeholder="Enter amount to withdraw (₹)"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-400 outline-none text-base"
        min="0"
        step="0.01"
      />

      {withdrawError && (
        <p className="text-sm text-red-600 text-center font-medium">{withdrawError}</p>
      )}

      <button
        onClick={handleWithdraw}
        className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-red-600 transition-all duration-200 font-bold text-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
      >
        Withdraw Now
      </button>
    </div>
  );
}
