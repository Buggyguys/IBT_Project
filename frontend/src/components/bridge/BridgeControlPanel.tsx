import React from 'react';
import TransactionStatusDisplay from './TransactionStatusDisplay.tsx';

interface BridgeControlPanelProps {
  amount: string;
  setAmount: (value: string) => void;
  loading: boolean;
  txStatus: string;
  handleMint: () => void;
  handleBridgeToSui: () => void;
  handleBridgeToEth: () => void;
}

const BridgeControlPanel: React.FC<BridgeControlPanelProps> = ({
  amount,
  setAmount,
  loading,
  txStatus,
  handleMint,
  handleBridgeToSui,
  handleBridgeToEth
}) => {
  return (
    <div className="w-1/2 bg-gray-800 p-8">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center text-white">
          Bridge Your Tokens
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Amount
            </label>
            <input
              type="number"
              step="0.0001"
              min="0"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount (e.g. 0.0004)"
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={loading}
            />
          </div>

          <div className="grid gap-4">
            <button
              onClick={handleMint}
              disabled={loading || !amount}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Mint Tokens (Test)"}
            </button>

            <button
              onClick={handleBridgeToSui}
              disabled={loading || !amount}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Bridge ETH → SUI"}
            </button>

            <button
              onClick={handleBridgeToEth}
              disabled={loading || !amount}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-md font-medium hover:bg-green-700 transition-colors disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? "Processing..." : "Bridge SUI → ETH"}
            </button>
          </div>

          <TransactionStatusDisplay txStatus={txStatus} />
        </div>
      </div>
    </div>
  );
};

export default BridgeControlPanel;
