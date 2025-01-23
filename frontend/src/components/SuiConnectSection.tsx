import { useEffect } from "react";
import { ConnectButton, useCurrentAccount  } from '@mysten/dapp-kit';

export const SuiConnectSection = () => {
  const currentAccount = useCurrentAccount();
  const isConnected = !!currentAccount;

  useEffect(() => {
    if (isConnected) {
      console.log("Sui wallet connected:", currentAccount.address);
    } else {
      console.log("Sui wallet disconnected");
    }
  }, [isConnected, currentAccount]);

  return (
    <div>
      <h3>Sui Connection Status: {isConnected ? 'Connected' : 'Disconnected'}</h3>
      <ConnectButton />
      {currentAccount && (
        <p>Connected Sui wallet: {currentAccount.address}</p>
      )}
    </div>
  );
};
