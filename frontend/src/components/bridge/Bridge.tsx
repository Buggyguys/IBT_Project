import { useState, useEffect } from "react";
import { useCurrentAccount, useSignTransaction } from '@mysten/dapp-kit';
import { Transaction } from "@mysten/sui/transactions";
import { SuiClient } from "@mysten/sui/client";
import BridgeLayout from './BridgeLayout';
import { 
  ETH_CONTRACT_ADDRESS
} from "../../contracts/ethereum";
import { 
  SUI_PACKAGE_ID, 
  SUI_MODULE_NAME, 
  SUI_TREASURY_CAP_ID 
} from "../../contracts/sui";

declare global {
  interface Window {
    ethereum: any;
  }
}

const Bridge = () => {
  const [amount, setAmount] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [txStatus, setTxStatus] = useState<string>("");
  const [balance, setBalance] = useState<string>("0");
  const { mutate: signTransaction } = useSignTransaction();
  const currentAccount = useCurrentAccount();

  // Initialize SUI client 
  const suiClient = new SuiClient({
    url: 'http://localhost:9000', 
  });

  const getBalance = async (account: string) => {
    try {
      const paddedAddress = account.slice(2).padStart(64, '0');
      const balanceData = `0x70a08231${paddedAddress}`;
      const balance = await window.ethereum.request({
        method: 'eth_call',
        params: [{
          to: ETH_CONTRACT_ADDRESS,
          data: balanceData,
        }, 'latest'],
      });
      const balanceInEth = BigInt(balance) / BigInt(1e18);
      setBalance(balanceInEth.toString());
      return balance;
    } catch (error) {
      console.error("Error getting balance:", error);
      return "0";
    }
  };

  const handleMint = async () => {
    if (!amount || !window.ethereum) {
      setTxStatus("Please ensure MetaMask is connected and amount is entered");
      return;
    }

    try {
      setLoading(true);
      setTxStatus("Starting mint...");

      const accounts = await window.ethereum.request({ 
        method: 'eth_requestAccounts' 
      });
      const account = accounts[0];

      const amountFloat = parseFloat(amount);
      if (isNaN(amountFloat) || amountFloat <= 0) {
        throw new Error("Invalid amount");
      }

      const amountInWei = BigInt(Math.floor(amountFloat * 1e18));
      const functionSelector = '0x40c10f19';
      const paddedAddress = account.slice(2).padStart(64, '0');
      const paddedAmount = amountInWei.toString(16).padStart(64, '0');
      const data = `${functionSelector}${paddedAddress}${paddedAmount}`;

      const tx = await window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: account,
          to: ETH_CONTRACT_ADDRESS,
          data,
          gas: '0x30D40',
        }],
      });

      setTxStatus("Minting... Please wait for confirmation");
      
      let receipt;
      while (!receipt) {
        receipt = await window.ethereum.request({
          method: 'eth_getTransactionReceipt',
          params: [tx],
        });

        if (receipt) {
          if (receipt.status === '0x1') {
            await getBalance(account);
            setTxStatus("Tokens minted successfully!");
            break;
          } else {
            throw new Error("Mint transaction failed");
          }
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    } catch (error: any) {
      console.error("Mint error:", error);
      setTxStatus(`Mint failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

const handleBridgeToSui = async () => {
  if (!amount || !window.ethereum || !currentAccount) {
    setTxStatus("Please ensure both wallets are connected and amount is entered");
    return;
  }

  try {
    setLoading(true);
    setTxStatus("Starting bridge to SUI...");

    const accounts = await window.ethereum.request({ 
      method: 'eth_requestAccounts' 
    });
    const account = accounts[0];

    const amountFloat = parseFloat(amount);
    if (isNaN(amountFloat) || amountFloat <= 0) {
      throw new Error("Invalid amount");
    }

    // Check ETH balance 
    const balance = await getBalance(account);
    const amountInWei = BigInt(Math.floor(amountFloat * 1e18));
    if (BigInt(balance) < amountInWei) {
      throw new Error("Insufficient token balance");
    }

    // Initiate ETH burn
    const burnSelector = '0x42966c68';
    const paddedAmount = amountInWei.toString(16).padStart(64, '0');
    const data = `${burnSelector}${paddedAmount}`;
    
    const burnTx = await window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: account,
        to: ETH_CONTRACT_ADDRESS,
        data,
        gas: '0x30D40',
      }],
    });

    setTxStatus("ETH burn transaction sent! Waiting for confirmation...");
    
    // Wait for burn 
    let receipt;
    while (!receipt) {
      receipt = await window.ethereum.request({
        method: 'eth_getTransactionReceipt',
        params: [burnTx],
      });

      if (receipt) {
        if (receipt.status === '0x1') {
          setTxStatus("ETH burn confirmed! Processing SUI mint...");

          // Create SUI transaction
          const tx = new Transaction();
          tx.setGasBudget(300_000_000); 

          const amountInSui = BigInt(Math.floor(amountFloat * 1e9));

          tx.moveCall({
            target: `${SUI_PACKAGE_ID}::${SUI_MODULE_NAME}::mint`,
            arguments: [
              tx.object(SUI_TREASURY_CAP_ID),
              tx.pure.u64(amountInSui), 
              tx.pure.address(currentAccount.address), 
            ],
          });

          // Sign and execute 
          signTransaction(
            {
              transaction: tx,
            },
            {
              onSuccess: (signedTx) => {
                suiClient.executeTransactionBlock({
                  transactionBlock: signedTx.bytes,
                  signature: signedTx.signature,
                  requestType: 'WaitForEffectsCert',
                  options: {
                    showEffects: true,
                    showEvents: true,
                    showInput: true, 
                  },
                })
                .then((response) => {
                  console.log("Full TX Details:", response); 
                  if (response.effects?.status.status === 'success') {
                    setTxStatus("Bridge completed successfully!");
                  } else {
                    console.error("TX Error Details:", response.effects?.status);
                    throw new Error('Sui transaction failed');
                  }
                })
                .catch((error) => {
                  console.error("Transaction execution error:", error);
                  setTxStatus(`Transaction execution failed: ${error.message}`);
                });
              },
              onError: (error) => {
                console.error("Signing error:", error);
                setTxStatus(`Signing failed: ${error.message}`);
              },
            }
          );

          break;
        } else {
          throw new Error("ETH burn failed");
        }
      }
      await new Promise(resolve => setTimeout(resolve, 2000));
    }

  } catch (error: any) {
    console.error("Bridge error:", error);
    setTxStatus(`Bridge failed: ${error.message}`);
  } finally {
    setLoading(false);
  }
};

  const handleBridgeToEth = async () => {
    if (!amount || !currentAccount) {
      setTxStatus("Please ensure Sui wallet is connected and amount is entered");
      return;
    }

    try {
      setLoading(true);
      setTxStatus("Starting bridge to ETH...");

      const amountFloat = parseFloat(amount);
      if (isNaN(amountFloat) || amountFloat <= 0) {
        throw new Error("Invalid amount");
      }

      // Create SUI burn 
      const tx = new Transaction();
      tx.setGasBudget(300_000_000); 

      const amountInSui = BigInt(Math.floor(amountFloat * 1e9));

      tx.moveCall({
        target: `${SUI_PACKAGE_ID}::${SUI_MODULE_NAME}::burn`,
        arguments: [
          tx.object(SUI_TREASURY_CAP_ID),
          tx.pure.u64(amountInSui), 
        ],
      });

      setTxStatus("Signing burn transaction on SUI...");

      
      signTransaction(
        {
          transaction: tx,
        },
        {
          onSuccess: async (signedTx) => {
            const response = await suiClient.executeTransactionBlock({
              transactionBlock: signedTx.bytes,
              signature: signedTx.signature,
              requestType: 'WaitForEffectsCert',
              options: {
                showEffects: true,
                showEvents: true,
                showInput: true 
              },
            });

            if (response.effects?.status.status === 'success') {
              setTxStatus("SUI burn complete! Processing ETH mint...");

              if (window.ethereum) {
                const accounts = await window.ethereum.request({
                  method: 'eth_requestAccounts'
                });
                const account = accounts[0];

                const amountInWei = BigInt(Math.floor(amountFloat * 1e18));
                const functionSelector = '0x40c10f19'; 
                const paddedAddress = account.slice(2).padStart(64, '0');
                const paddedAmount = amountInWei.toString(16).padStart(64, '0');
                const data = `${functionSelector}${paddedAddress}${paddedAmount}`;

                const ethTx = await window.ethereum.request({
                  method: 'eth_sendTransaction',
                  params: [{
                    from: account,
                    to: ETH_CONTRACT_ADDRESS,
                    data,
                    gas: '0x30D40',
                  }],
                });

                setTxStatus("ETH mint transaction sent! Waiting for confirmation...");
                
                let receipt;
                while (!receipt) {
                  receipt = await window.ethereum.request({
                    method: 'eth_getTransactionReceipt',
                    params: [ethTx],
                  });

                  if (receipt) {
                    if (receipt.status === '0x1') {
                      await getBalance(account);
                      setTxStatus("Bridge completed successfully!");
                      break;
                    } else {
                      throw new Error("ETH mint failed");
                    }
                  }
                  await new Promise(resolve => setTimeout(resolve, 2000));
                }
              }
            } else {
              throw new Error('Sui burn transaction failed');
            }
          },
          onError: (error) => {
            console.error("Signing error:", error);
            setTxStatus(`Signing failed: ${error.message}`);
          },
        }
      );

    } catch (error: any) {
      console.error("Bridge error:", error);
      setTxStatus(`Bridge failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      if (window.ethereum) {
        const accounts = await window.ethereum.request({ 
          method: 'eth_requestAccounts' 
        });
        if (accounts.length > 0) {
          await getBalance(accounts[0]);
        }
      }
    };
    fetchBalance();
  }, []);

  return (
    <BridgeLayout
      amount={amount}
      setAmount={setAmount}
      balance={balance}
      loading={loading}
      txStatus={txStatus}
      handleMint={handleMint}
      handleBridgeToSui={handleBridgeToSui}
      handleBridgeToEth={handleBridgeToEth}
    />
  );
};

export default Bridge;
