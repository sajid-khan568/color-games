import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      setIsError(true);
      setMessage(' Please fill in both fields.');
      return;
    }

    if (email === 'admin' && password === '123') {
      setIsError(false);
      setMessage(' Login successful!');
      setTimeout(() => {
        navigate('/admin');
      }, 1000);
    } else {
      setIsError(true);
      setMessage(' Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 font-inter px-4">
      <div className="bg-white shadow-md rounded-xl p-8 max-w-sm w-full space-y-6">
        <div className="text-center space-y-2">
          <ShieldCheck className="mx-auto text-purple-600 w-10 h-10" />
          <h2 className="text-xl font-bold text-gray-800">Admin Login</h2>
        </div>

        {message && (
          <div
            className={`text-sm text-center py-2 px-3 rounded-md font-medium ${
              isError ? 'bg-red-100 text-red-700' : 'bg-green-100 text-green-700'
            }`}
          >
            {message}
          </div>
        )}

        <input
          type="email"
          placeholder="Admin Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-sm"
        />

        <input
          type="password"
          placeholder="Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-sm"
        />

        <button
          onClick={handleLogin}
          className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-all font-semibold"
        >
          🔐 Login
        </button>
      </div>
    </div>
  )}