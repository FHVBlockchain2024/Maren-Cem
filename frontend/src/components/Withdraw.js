import React, { useState } from "react";
import { ethers } from "ethers";

const Withdraw = ({ contract }) => {
  const [amount, setAmount] = useState("");

  const handleWithdraw = async () => {
    if (!contract) {
      alert("Contract not connected!");
      return;
    }

    try {
      const tx = await contract.withdraw(ethers.utils.parseEther(amount)); // Convert ETH to Wei
      await tx.wait(); // Wait for transaction confirmation
      alert("Withdraw successful!");
    } catch (error) {
      console.error("Withdraw failed:", error);
      alert("Failed to withdraw. Ensure you have enough balance.");
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
      <button className="button" onClick={handleWithdraw}>Withdraw</button>
    </div>
  );
};

export default Withdraw;
