import React from 'react';
import { useWallet } from '../context/WalletContext';

import AddFunds from '../components/AddFunds';
import PredictionForm from '../components/PredictionForm';
import RoundResult from '../components/RoundResult';
import TransactionTable from '../components/TransactionTable';
import WithdrawForm from '../components/WithdrawForm';
import Leaderboard from '../components/Leaderboard';
import ReferralCard from '../components/ReferralCard';
import RoundStatus from '../components/RoundStatus';

export default function Dashboard() {
  const { balance } = useWallet();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-green-100 via-blue-100 to-purple-100 p-4 sm:p-6 lg:p-8 font-inter">

      <div className="w-full max-w-xl mb-6">
        <div className="bg-white rounded-xl shadow-lg p-4 text-center text-2xl font-bold text-green-700 border border-green-200">
          🪙 Wallet Balance: ₹{balance.toFixed(2)}
        </div>
      </div>
      <div className="flex flex-col gap-6 w-full max-w-6xl mx-auto">
        <AddFunds />
        <WithdrawForm />
        <RoundStatus/>
        <PredictionForm />
        <RoundResult />
        <TransactionTable />
        <Leaderboard />
        <ReferralCard />
      </div>
    </div>
  );
}
