import React, { useState } from 'react';

const dummyTransactions = [
  { id: 1, name: 'Sajid Khan', type: 'Add Fund', amount: 200, status: 'Success', date: '2025-07-14' },
  { id: 2, name: 'Ayesha Patel', type: 'Withdraw', amount: 100, status: 'Pending', date: '2025-07-13' },
  { id: 3, name: 'Zaid Ali', type: 'Withdraw', amount: 300, status: 'Success', date: '2025-07-12' },
  { id: 4, name: 'Sajid Khan', type: 'Add Fund', amount: 150, status: 'Failed', date: '2025-07-11' },
];

export default function Transactions() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = dummyTransactions.filter((tx) =>
    tx.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full overflow-x-auto space-y-4 font-inter">
      <h2 className="text-xl font-bold text-gray-800">💳 Transactions</h2>


      <input
        type="text"
        placeholder="Search by user name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full sm:w-80 px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 outline-none text-sm"
      />

      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left text-gray-600 font-medium">User</th>
            <th className="px-4 py-2 text-left text-gray-600 font-medium">Type</th>
            <th className="px-4 py-2 text-left text-gray-600 font-medium">Amount</th>
            <th className="px-4 py-2 text-left text-gray-600 font-medium">Status</th>
            <th className="px-4 py-2 text-left text-gray-600 font-medium">Date</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-gray-700">
          {filteredData.length === 0 ? (
            <tr>
              <td colSpan="5" className="text-center py-4 text-gray-500">
                No transactions found.
              </td>
            </tr>
          ) : (
            filteredData.map((tx) => (
              <tr key={tx.id} className="hover:bg-gray-50 transition">
                <td className="px-4 py-2 whitespace-nowrap">{tx.name}</td>
                <td className="px-4 py-2 whitespace-nowrap">{tx.type}</td>
                <td className="px-4 py-2 whitespace-nowrap">₹{tx.amount}</td>
                <td className="px-4 py-2 whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      tx.status === 'Success'
                        ? 'bg-green-100 text-green-700'
                        : tx.status === 'Pending'
                        ? 'bg-yellow-100 text-yellow-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="px-4 py-2 whitespace-nowrap">{tx.date}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
