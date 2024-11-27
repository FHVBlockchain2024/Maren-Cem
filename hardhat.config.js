require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY
const INFURA_API_KEY = process.env.INFURA_API_KEY

module.exports = {
    solidity: "0.8.27",
    networks: {
        sepolia: {
        url:  `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
            accounts: [PRIVATE_KEY],
        },
    },
  
};