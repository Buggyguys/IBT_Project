import React from 'react';

interface TransactionStatusDisplayProps {
  txStatus: string;
}

const TransactionStatusDisplay: React.FC<TransactionStatusDisplayProps> = ({ txStatus }) => {
  if (!txStatus) return null;

  return (
    <div className={`p-4 rounded-lg ${
      txStatus.includes("failed") || txStatus.includes("reverted")
        ? "bg-red-900/50 border border-red-700 text-red-200"
        : "bg-blue-900/50 border border-blue-700 text-blue-200"
    }`}>
      {txStatus}
    </div>
  );
}

export default TransactionStatusDisplay;
