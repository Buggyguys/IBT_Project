import React from 'react';
import { MetaMaskConnectSection } from '../MetaMaskConnectSection';
import { SuiConnectSection } from '../SuiConnectSection';

interface WalletConnectionPanelProps {
  balance?: string;
}

const WalletConnectionPanel: React.FC<WalletConnectionPanelProps> = ({ balance }) => {
  return (
    <div className="w-1/2 bg-gray-900 p-8 border-r border-gray-700">
      <h2 className="text-2xl font-bold mb-8 text-center text-white">
        Connect Your Wallets
      </h2>
      
      <div className="space-y-8">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl mb-4 text-white">Ethereum Wallet</h3>
          <MetaMaskConnectSection />
          {balance && (
            <p className="mt-2 text-sm text-gray-300">
              Balance: {balance} IBT
            </p>
          )}
        </div>

        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
          <h3 className="text-xl mb-4 text-white">Sui Wallet</h3>
          <SuiConnectSection />
        </div>
      </div>
    </div>
  );
};

export default WalletConnectionPanel;
