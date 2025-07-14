export default function ReferralCard() {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-5 font-inter border border-gray-200">
      <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800">🔗 Referral System</h2>

      <p className="text-base text-gray-600 text-center">
        Invite your friends and earn <span className="font-semibold text-green-600">₹50</span> per referral!
      </p>

      <input
        type="text"
        value="https://game.com/referral/abcd123"
        readOnly
        className="w-full px-4 py-2 border border-gray-300 rounded-md text-gray-700 text-sm bg-gray-50 focus:outline-none"
      />

      <button
        className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 rounded-md font-bold text-base shadow-md hover:from-blue-600 hover:to-indigo-700 transition-all duration-200"
      >
        Copy Referral Link
      </button>
    </div>
  );
}
