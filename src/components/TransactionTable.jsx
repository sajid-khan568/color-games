export default function TransactionTable() {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-5 font-inter border border-gray-200 overflow-x-auto">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2 text-center">📄 Transaction History</h2>

      <table className="w-full text-sm sm:text-base border-collapse">
        <thead className="bg-gray-100 text-gray-600">
          <tr>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Type</th>
            <th className="py-2 px-4 text-left">Amount</th>
            <th className="py-2 px-4 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          <tr className="hover:bg-gray-50">
            <td className="py-2 px-4">12 July 2025</td>
            <td className="py-2 px-4">Add Fund</td>
            <td className="py-2 px-4">₹200</td>
            <td className="py-2 px-4 text-green-600 font-semibold">Success</td>
          </tr>
          <tr className="hover:bg-gray-50">
            <td className="py-2 px-4">11 July 2025</td>
            <td className="py-2 px-4">Withdraw</td>
            <td className="py-2 px-4">₹100</td>
            <td className="py-2 px-4 text-green-600 font-semibold">Success</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
