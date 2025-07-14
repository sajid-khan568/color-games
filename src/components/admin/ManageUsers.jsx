
import React, { useState } from 'react';
import { Trash2, Eye } from 'lucide-react';

const dummyUsers = [
  { id: 1, name: 'Sajid Khan', email: 'sajidmansuri.com', phone: '9csdc43210', status: 'active' },
  { id: 2, name: 'Ayesha Patel', email: 'ayeshasdcscsdle.com', phone: '9sdd56780', status: 'active' },
  { id: 3, name: 'Zaid Ali', email: 'zaidscdscdcd.com', phone: '995655', status: 'blocked' },
];

export default function ManageUsers() {
  const [users, setUsers] = useState(dummyUsers);

  const handleBlockToggle = (id) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, status: user.status === 'active' ? 'blocked' : 'active' } : user
      )
    );
  };

  const handleDelete = (id) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-4xl w-full mx-auto overflow-x-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">👥 Manage Users</h2>

      <table className="min-w-full divide-y divide-gray-200 text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Name</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Email</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Phone</th>
            <th className="px-4 py-2 text-left font-semibold text-gray-600">Status</th>
            <th className="px-4 py-2 text-center font-semibold text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {users.map((user) => (
            <tr key={user.id} className="hover:bg-gray-50">
              <td className="px-4 py-2 whitespace-nowrap">{user.name}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.email}</td>
              <td className="px-4 py-2 whitespace-nowrap">{user.phone}</td>
              <td className="px-4 py-2 whitespace-nowrap">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium capitalize ${
                    user.status === 'active'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="px-4 py-2 text-center space-x-2">
                <button
                  onClick={() => handleBlockToggle(user.id)}
                  className={`px-3 py-1 text-xs font-medium rounded-full ${
                    user.status === 'active'
                      ? 'bg-yellow-400 hover:bg-yellow-500 text-white'
                      : 'bg-blue-500 hover:bg-blue-600 text-white'
                  }`}
                >
                  {user.status === 'active' ? 'Block' : 'Unblock'}
                </button>
                <button
                  onClick={() => handleDelete(user.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  <Trash2 size={16} />
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <Eye size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}