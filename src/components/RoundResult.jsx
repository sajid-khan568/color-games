export default function RoundResult() {
  return (
    <div className="w-full max-w-sm sm:max-w-md lg:max-w-xl bg-white p-5 sm:p-6 rounded-xl shadow-md mx-auto space-y-3 font-inter">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 flex items-center gap-2">
        📊 Round Result
      </h2>

      <p className="text-base sm:text-lg text-gray-700">
        🟢 Last winning color: <span className="font-bold text-green-600">Green</span>
      </p>

      <p className="text-sm sm:text-base text-gray-500">
        Round ID: <strong>#1021</strong> | Time: <strong>02:00 PM</strong>
      </p>
    </div>
  );
}
