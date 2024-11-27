import React, { useState } from "react";
import { ethers } from "ethers";
import ConnectWallet from "./components/ConnectWallet";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";
import { CONTRACT_ADDRESS, CONTRACT_ABI } from "./contractConfig";
import "./App.css";

function App() {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  // Connect Wallet
  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const newProvider = new ethers.providers.Web3Provider(window.ethereum);
        const newSigner = await newProvider.getSigner();
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

        setProvider(newProvider);
        setSigner(newSigner);
        setAccount(accounts[0]);

        // Connect to the contract
        const newContract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, newSigner);
        setContract(newContract);
      } catch (error) {
        console.error("Failed to connect wallet:", error);
      }
    } else {
      alert("MetaMask not detected!");
    }
  };

  // Disconnect Wallet
  const disconnectWallet = () => {
    setProvider(null);
    setSigner(null);
    setContract(null);
    setAccount(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sepolia Smart Contract</h1>

        {account ? (
          <div>
            <p>Connected as: {account}</p>
            <button className="button" onClick={disconnectWallet}>Disconnect Wallet</button>
          </div>
        ) : (
          <ConnectWallet connectWallet={connectWallet} account={account} />
        )}

        {account && (
          <>
            <Deposit contract={contract} />
            <Withdraw contract={contract} />
          </>
        )}
      </header>
    </div>
  );
}

export default App;
