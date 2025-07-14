// 📁 src/components/admin/Sidebar.jsx

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar({ active, setActive }) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 'users', label: '👥 Manage Users' },
    { id: 'rounds', label: '🎮 Manage Rounds' },
    { id: 'colors', label: '🎨 Control Colors' },
    { id: 'timer', label: '⏱️ Result Timer' },
    { id: 'transactions', label: '💳 Transactions' },
    { id: 'withdrawals', label: '🏧 Withdraw Requests' },
  ];

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden p-4 bg-white shadow flex justify-between items-center border-b border-gray-200">
        <span className="font-bold text-purple-700 text-lg">🛠 Admin</span>
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Sidebar Drawer (Mobile + Desktop) */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-white shadow-lg border-r border-gray-200 z-50 transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:block
        `}
      >
        <div className="p-6 border-b border-gray-200 text-xl font-bold text-purple-700">
          🛠 Admin Panel
        </div>
        <nav className="p-4 space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                setActive(item.id);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 rounded-md font-medium transition ${
                active === item.id
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-700 hover:bg-purple-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
}

