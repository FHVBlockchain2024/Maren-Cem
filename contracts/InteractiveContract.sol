// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract InteractiveContract {
    // Track user ETH balances
    mapping(address => uint256) public balances;

    event TokensDeposited(address indexed user, uint256 amount, uint256 previousBalance);
    event TokensWithdrawn(address indexed user, uint256 amount, uint256 previousBalance);

    // Deposit ETH
    function deposit() public payable {
        require(msg.value > 0, "Must deposit a non-zero amount");

        uint256 previousBalance = balances[msg.sender];
        balances[msg.sender] += msg.value;

        emit TokensDeposited(msg.sender, msg.value, previousBalance);
    }

    // Withdraw ETH
    function withdraw(uint256 amount) public {
        require(amount > 0, "Must withdraw a non-zero amount");
        require(balances[msg.sender] >= amount, "Insufficient balance");

        uint256 previousBalance = balances[msg.sender];
        balances[msg.sender] -= amount;
        payable(msg.sender).transfer(amount);

        emit TokensWithdrawn(msg.sender, amount, previousBalance);
    }
}