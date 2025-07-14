export default function AdminFeatures() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-6 text-sm">
      <h2 className="text-lg font-bold text-gray-800 text-center border-b pb-2">🛠️ Admin Controls</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { title: '👥 Manage Users', desc: 'Add, edit or ban users from the system.' },
          { title: '🎮 Game Rounds', desc: 'Start, end, or manage active game rounds.' },
          { title: '🎨 Control Colors', desc: 'Set colors to auto, random or manual mode.' },
          { title: '💳 Transactions', desc: 'View user deposits, withdrawals, and history.' },
          { title: '⏰ Result Timers', desc: 'Adjust result declaration timing settings.' },
          { title: '🏧 Withdraw Requests', desc: 'Manually approve or reject withdrawal requests.' },
        ].map((item, idx) => (
          <div key={idx} className="bg-gray-50 p-4 rounded-lg border hover:shadow transition-all">
            <p className="font-semibold text-gray-700">{item.title}</p>
            <p className="text-gray-500 text-xs">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}