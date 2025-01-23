import React from 'react';
import WalletConnectionPanel from './WalletConnectionPanel.tsx';
import BridgeControlPanel from './BridgeControlPanel.tsx';

interface BridgeLayoutProps {
  amount: string;
  setAmount: (value: string) => void;
  balance: string;
  loading: boolean;
  txStatus: string;
  handleMint: () => void;
  handleBridgeToSui: () => void;
  handleBridgeToEth: () => void;
}

const BridgeLayout: React.FC<BridgeLayoutProps> = ({
  amount,
  setAmount,
  balance,
  loading,
  txStatus,
  handleMint,
  handleBridgeToSui,
  handleBridgeToEth
}) => {
  return (
    <div className="flex h-screen">
      {/* Left Panel - Wallet Connections */}
      <WalletConnectionPanel balance={balance} />

      {/* Right Panel - Bridge Interface */}
      <BridgeControlPanel
        amount={amount}
        setAmount={setAmount}
        loading={loading}
        txStatus={txStatus}
        handleMint={handleMint}
        handleBridgeToSui={handleBridgeToSui}
        handleBridgeToEth={handleBridgeToEth}
      />
    </div>
  );
};

export default BridgeLayout;
