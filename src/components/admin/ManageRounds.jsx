import React, { useState } from 'react';
import { PlusCircle, Trash2 } from 'lucide-react';

const initialRounds = [
  { id: 1, round: 'Round 1', time: '2 min', status: 'active' },
  { id: 2, round: 'Round 2', time: '2 min', status: 'upcoming' },
];

export default function ManageRounds() {
  const [rounds, setRounds] = useState(initialRounds);
  const [newRound, setNewRound] = useState('');
  const [newTime, setNewTime] = useState('2');
  const [message, setMessage] = useState('');

  const handleAddRound = () => {
    if (!newRound.trim() || isNaN(newTime) || parseInt(newTime) <= 0) {
      setMessage('Please provide valid round name and time.');
      return;
    }
    const nextId = rounds.length + 1;
    setRounds([
      ...rounds,
      { id: nextId, round: newRound, time: `${newTime} min`, status: 'upcoming' },
    ]);
    setNewRound('');
    setNewTime('2');
    setMessage('New round added successfully!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleDelete = (id) => {
    setRounds((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-4xl mx-auto space-y-4">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">🎮 Manage Game Rounds</h2>

      {message && <div className="text-sm text-green-600 font-medium">✅ {message}</div>}

      <div className="flex flex-col md:flex-row gap-2 items-center">
        <input
          type="text"
          placeholder="Enter round name"
          value={newRound}
          onChange={(e) => setNewRound(e.target.value)}
          className="w-full md:w-1/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <input
          type="number"
          placeholder="Duration in min"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
          min="1"
          className="w-full md:w-1/4 px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />
        <button
          onClick={handleAddRound}
          className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          <PlusCircle size={18} /> Add Round
        </button>
      </div>

      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Round</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Time</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Status</th>
            <th className="px-4 py-2 text-center font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {rounds.map((round) => (
            <tr key={round.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">{round.round}</td>
              <td className="px-4 py-2 whitespace-nowrap">{round.time}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                    round.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-yellow-100 text-yellow-700'
                  }`}
                >
                  {round.status}
                </span>
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleDelete(round.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
