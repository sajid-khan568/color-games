import React, { createContext, useContext, useState } from 'react';
const WalletContext = createContext(null);
export function WalletProvider({ children }) {
 
  const [balance, setBalance] = useState(100); 
  const deductFunds = (amount) => {
    setBalance((prev) => prev - amount);
  };
  const addFunds = (amount) => {
    setBalance((prev) => prev + amount);
  };

  const walletValue = { balance, deductFunds, addFunds };

  return (
    <WalletContext.Provider value={walletValue}>
      {children}
    </WalletContext.Provider>
  );
}

/**
 * Custom hook to easily access the wallet context.
 * Throws an error if used outside of a WalletProvider.
 */
export const useWallet = () => {
  const context = useContext(WalletContext);
  if (context === null) {
    // This error helps developers know if they forgot to wrap their component in WalletProvider.
    throw new Error('useWallet must be used within a WalletProvider');
  }
  return context;
};