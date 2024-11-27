const hre = require("hardhat");

async function main() {
  // Replace with your deployed contract address
  const contractAddress = "0xA09e07C11fda1ffeB92eaD99E379C4a555793fe1";
  const InteractiveContract = await hre.ethers.getContractFactory("InteractiveContract");
  const contract = InteractiveContract.attach(contractAddress);

  // Example interactions:
  console.log("Depositing 0.0001 ETH...");
  const depositTx = await contract.deposit({ value: hre.ethers.utils.parseEther("0.0001") });
  await depositTx.wait();
  console.log("Deposit complete!");

  console.log("Checking balance...");
  const balance = await contract.balances("0xA09e07C11fda1ffeB92eaD99E379C4a555793fe1");
  console.log("Your balance:", hre.ethers.utils.formatEther(balance));

  console.log("Withdrawing 0.0001 ETH...");
  const withdrawTx = await contract.withdraw(hre.ethers.utils.parseEther("0.0001"));
  await withdrawTx.wait();
  console.log("Withdrawal complete!");

  console.log("Checking balance after withdrawal...");
  const newBalance = await contract.balances("0xA09e07C11fda1ffeB92eaD99E379C4a555793fe1");
  console.log("Your balance:", hre.ethers.utils.formatEther(newBalance));
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
