import React, { useState } from 'react';
import Timer from './Timer';
import { useWallet } from '../context/WalletContext';

export default function PredictionForm() {
  const { balance, deductFunds } = useWallet();

  const [selectedColor, setSelectedColor] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setMessage('');
  };

  const showMessage = (msg, type) => {
    setMessage(msg);
    setMessageType(type);
    setTimeout(() => {
      setMessage('');
      setMessageType('');
    }, 3000);
  };

  const handlePredict = () => {
    if (!selectedColor) {
      showMessage('Please select a color', 'error');
      return;
    }

    const amount = parseFloat(inputAmount);
    if (isNaN(amount) || amount <= 0) {
      showMessage('Enter a valid amount (greater than 0)', 'error');
      return;
    }

    if (amount > balance) {
      showMessage('Insufficient funds', 'error');
      return;
    }

    deductFunds(amount);
    showMessage(`Prediction made! Deducted ₹${amount}. New balance: ₹${(balance - amount).toFixed(2)}`, 'success');
    setInputAmount('');
    setSelectedColor('');
  };

  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-5 font-inter">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">🎨 Predict Color</h2>

      {message && (
        <div
          className={`p-3 rounded-md text-center text-sm sm:text-base font-medium ${
            messageType === 'error'
              ? 'bg-red-100 text-red-700'
              : 'bg-green-100 text-green-700'
          }`}
        >
          {message}
        </div>
      )}

      <div className="text-center text-gray-700 font-semibold text-base sm:text-lg">
        Your Balance: <span className="text-purple-600">₹{balance.toFixed(2)}</span>
      </div>

      <div className="mt-3 mb-2">
        <Timer duration={120} onEnd={() => showMessage('⏳ Time is up! Prediction closed.', 'error')} />
      </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 mt-3">
        {['red', 'green', 'blue'].map((color) => {
          const colorMap = {
            red: { label: '🔴 Red', bg: 'bg-red-500', hover: 'hover:bg-red-600', selected: 'bg-red-700 ring-2 ring-red-400' },
            green: { label: '🟢 Green', bg: 'bg-green-500', hover: 'hover:bg-green-600', selected: 'bg-green-700 ring-2 ring-green-400' },
            blue: { label: '🔵 Blue', bg: 'bg-blue-500', hover: 'hover:bg-blue-600', selected: 'bg-blue-700 ring-2 ring-blue-400' }
          };

          const isSelected = selectedColor === color;

          return (
            <button
              key={color}
              onClick={() => handleColorSelect(color)}
              className={`w-full py-2 rounded-md text-white font-semibold transition-all duration-200 shadow-md 
                ${isSelected ? colorMap[color].selected : `${colorMap[color].bg} ${colorMap[color].hover}`}
              `}
            >
              {colorMap[color].label}
            </button>
          );
        })}
      </div>

      <input
        type="number"
        placeholder="Enter amount (₹)"
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-base"
        value={inputAmount}
        onChange={(e) => setInputAmount(e.target.value)}
        min="0"
        step="0.01"
      />

      <button
        onClick={handlePredict}
        className="w-full bg-purple-500 text-white py-3 rounded-md hover:bg-purple-600 transition-all duration-200 font-bold text-lg shadow-md hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Predict Now
      </button>
    </div>
  );
}
