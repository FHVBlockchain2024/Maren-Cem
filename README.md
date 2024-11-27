# Interactive Smart Contract on Sepolia
This smart contract allows users to:

1. Deposit and withdraw ETH.
2. Track their ETH balances.

## How to Interact
### Before interaction

- Make sure to replace `0xYourContractAddress` and `0xYourAddress` with the actual deployed contract address and your wallet address in `contractConfig.js` or `interact.js` script depending on how you interact with the contract.
- Use a funded wallet on the Sepolia network to test deposits and withdrawals.
- Include your [INFURA_API_KEY] from infura and [PRIVATE_KEY] from Metamask in the .env file.


### Deploy on Sepolia
1. Use Hardhat to deploy the contract with `npx hardhat run scripts/deploy.js --network sepolia`
2. Copy the contract address you get and and paste it to `/frontend/src/contractConfig.js`.
3. Alternativly use one of the contracts we have deployed with this adress: `0xb93D32e05edd01A837c75F3b675A4f1CCD4d00C8`

### How to Run
- npm install react-scripts --save
- cd frontend
- npm start

### Methods

- **`deposit()`**
  - Send ETH to the contract to update your balance.
  - Example: Send 0.1 ETH to deposit into your account.
- **`withdraw(uint256 amount)`**
  - Withdraw ETH from your balance.
  - Example: `withdraw(100000000000000000)` (withdraw 0.1 ETH).

### View Balances

- **`balances(address)`**: View the ETH balance of any address.

## ABI
```javascript
"abi": [
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "previousBalance",
          "type": "uint256"
        }
      ],
      "name": "TokensDeposited",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "user",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "previousBalance",
          "type": "uint256"
        }
      ],
      "name": "TokensWithdrawn",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "name": "balances",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "deposit",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]
  ```

## Interaction Example (Using Hardhat)

To interact with the contract we have made a `interact.js` script. The script both deposits and withdraws, and shows balance. 

This can be run by typing `npx hardhat run scripts/interact.js --network sepolia`. 
