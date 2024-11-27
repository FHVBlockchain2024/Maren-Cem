import React, { useState } from "react";
import { ethers } from "ethers";

const Deposit = ({ contract }) => {
  const [amount, setAmount] = useState("");

  const handleDeposit = async () => {
    if (!contract) {
      alert("Contract not connected!");
      return;
    }

    try {
      const tx = await contract.deposit({
        value: ethers.utils.parseEther(amount), // Convert amount to Wei
      });
      await tx.wait(); // Wait for transaction to complete
      alert("Deposit successful!");
    } catch (error) {
      console.error("Deposit failed:", error);
      alert("Failed to deposit.");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button className="button" onClick={handleDeposit}>Deposit</button>
    </div>
  );
};

export default Deposit;