import React, { useState } from 'react';

const dummyRequests = [
  { id: 1, user: 'Sajid Khan', amount: 300, date: '2025-07-14', status: 'pending' },
  { id: 2, user: 'Ayesha Patel', amount: 150, date: '2025-07-13', status: 'approved' },
  { id: 3, user: 'Zaid Ali', amount: 400, date: '2025-07-12', status: 'rejected' },
];

export default function WithdrawRequests() {
  const [requests, setRequests] = useState(dummyRequests);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleStatusChange = (id, newStatus) => {
    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: newStatus, actionTime: new Date().toLocaleString() } : req
      )
    );
  };

  const filteredRequests = requests
    .filter(req =>
      req.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      req.date.includes(searchTerm)
    )
    .filter(req => statusFilter === 'all' || req.status === statusFilter);

  const countByStatus = type => requests.filter(r => r.status === type).length;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4 w-full overflow-x-auto font-inter">
      <h2 className="text-xl font-bold text-gray-800">🏧 Withdraw Requests</h2>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <input
          type="text"
          placeholder="🔍 Search by username or date"
          className="px-4 py-2 border border-gray-300 rounded-md text-sm w-full sm:w-1/2"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <select
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
          className="px-3 py-2 border rounded-md text-sm w-full sm:w-48"
        >
          <option value="all">All Status</option>
          <option value="pending">Pending</option>
          <option value="approved">Approved</option>
          <option value="rejected">Rejected</option>
        </select>
      </div>

      <p className="text-sm text-gray-600">
        Total Requests: {requests.length} | Pending: {countByStatus('pending')} | Approved: {countByStatus('approved')} | Rejected: {countByStatus('rejected')}
      </p>

      <table className="min-w-full divide-y divide-gray-200 text-sm mt-3">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left">User</th>
            <th className="px-4 py-2 text-left">Amount</th>
            <th className="px-4 py-2 text-left">Date</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {filteredRequests.map(req => (
            <tr key={req.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">{req.user}</td>
              <td className="px-4 py-2 whitespace-nowrap">₹{req.amount}</td>
              <td className="px-4 py-2 whitespace-nowrap">{req.date}</td>
              <td className="px-4 py-2">
                <span className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                  req.status === 'approved'
                    ? 'bg-green-100 text-green-700'
                    : req.status === 'rejected'
                    ? 'bg-red-100 text-red-700'
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {req.status}
                </span>
              </td>
              <td className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => handleStatusChange(req.id, 'approved')}
                  className="px-3 py-1 text-xs font-semibold rounded bg-green-500 hover:bg-green-600 text-white"
                >
                  Approve
                </button>
                <button
                  onClick={() => handleStatusChange(req.id, 'rejected')}
                  className="px-3 py-1 text-xs font-semibold rounded bg-red-500 hover:bg-red-600 text-white"
                >
                  Reject
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
