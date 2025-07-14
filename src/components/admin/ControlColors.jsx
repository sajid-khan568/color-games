// 📁 src/components/admin/ControlColors.jsx

import React, { useState } from 'react';
import { Settings } from 'lucide-react';

export default function ControlColors() {
  const [mode, setMode] = useState('auto');
  const [manualColor, setManualColor] = useState('');
  const [message, setMessage] = useState('');
  const [popup, setPopup] = useState('');

  const handleModeChange = (newMode) => {
    setMode(newMode);
    setMessage(`Switched to ${newMode.toUpperCase()} mode.`);
    setPopup('');
  };

  const handleManualSet = () => {
    if (!manualColor) {
      setMessage(' Please select a color');
      return;
    }
    setMessage(` Manual color set to: ${manualColor}`);
    setPopup('');
  };

  const handleColorClick = (color) => {
    setManualColor(color);
    setPopup(`Selected color: ${color}`);
    setMessage('');
    setTimeout(() => setPopup(''), 2000);
  };

  const buttonClass = (btnMode) => `
    flex items-center justify-center gap-2 px-4 py-2 rounded-md font-semibold border transition-all duration-200 text-sm sm:text-base
    ${mode === btnMode ? 'bg-purple-600 text-white ring-2 ring-purple-400' : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-100'}
  `;

  const colorButtonClass = (color) => `
    w-full sm:w-auto px-4 py-2 rounded-md font-semibold text-white shadow-md text-sm sm:text-base relative
    ${manualColor === color ? 'ring-2 ring-offset-2' : ''}
    ${color === 'red' ? 'bg-red-500 hover:bg-red-600' : ''}
    ${color === 'green' ? 'bg-green-500 hover:bg-green-600' : ''}
    ${color === 'blue' ? 'bg-blue-500 hover:bg-blue-600' : ''}
  `;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl mx-auto space-y-6 font-inter">
      <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
        <Settings className="text-purple-600" /> Control Color Output
      </h2>

      {message && (
        <div className="p-3 rounded-md text-center text-sm bg-blue-100 text-blue-700 font-medium">
          {message}
        </div>
      )}

      {popup && (
        <div className="p-2 rounded text-center text-xs font-medium bg-yellow-100 text-yellow-700">
          {popup}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <button onClick={() => handleModeChange('auto')} className={buttonClass('auto')}>
           Auto
        </button>
        <button onClick={() => handleModeChange('random')} className={buttonClass('random')}>
           Random
        </button>
        <button onClick={() => handleModeChange('manual')} className={buttonClass('manual')}>
           Manual
        </button>
      </div>

      {mode === 'manual' && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <button onClick={() => handleColorClick('red')} className={colorButtonClass('red')}>
              🔴 Red
            </button>
            <button onClick={() => handleColorClick('green')} className={colorButtonClass('green')}>
              🟢 Green
            </button>
            <button onClick={() => handleColorClick('blue')} className={colorButtonClass('blue')}>
              🔵 Blue
            </button>
          </div>
          <div className="text-center">
            <button
              onClick={handleManualSet}
              className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md font-semibold text-sm sm:text-base"
            >
              Set Color
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
