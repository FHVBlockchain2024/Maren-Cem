const hre = require("hardhat");

async function main() {
  const InteractiveContract = await hre.ethers.getContractFactory("InteractiveContract");
  const contract = await InteractiveContract.deploy();

  await contract.deployed();

  console.log("Contract deployed to:", contract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
