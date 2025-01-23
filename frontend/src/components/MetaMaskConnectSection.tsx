import { useState, useEffect } from "react";
import { useSDK } from "@metamask/sdk-react";

export const MetaMaskConnectSection = () => {
  const { sdk } = useSDK();
  const [connected, setConnected] = useState(false);
  const [account, setAccount] = useState<string>("");

const [isConnecting, setIsConnecting] = useState(false);

const connect = async () => {
  if (isConnecting) return; 
  setIsConnecting(true);
  try {
    const accounts = await sdk?.connect();
    if (accounts && accounts.length > 0) {
      setAccount(accounts[0]);
      setConnected(true);
    }
  } catch (err) {
    console.error("Failed to connect to MetaMask:", err);
  } finally {
    setIsConnecting(false);
  }
};

  const disconnect = () => {
    setAccount("");
    setConnected(false);
  };

  const handleAccountsChanged = async (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnect(); 
    } else {
      setAccount(accounts[0]); 
    }
  };

  useEffect(() => {
    const provider = sdk?.getProvider();
    provider?.on("accountsChanged", handleAccountsChanged);

    return () => {
      provider?.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, [sdk]);

  return (
    <div style={{ marginBottom: 20 }}>
      <h3>MetaMask Connection</h3>
      {connected ? (
        <>
          <p>Connected account: {account}</p>
          <button onClick={disconnect}>Log Out</button>
        </>
      ) : (
        <button onClick={connect}>Connect MetaMask</button>
      )}
    </div>
  );
};
