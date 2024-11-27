const { expect } = require("chai");
const { ethers } = require("hardhat");

//The tests simulate deposits and withdrawals 

//defining test case
describe("MyContract", function () {
    let MyContract, myContract, owner;

    beforeEach(async function () {
        [owner] = await ethers.getSigners();
        MyContract = await ethers.getContractFactory("MyContract");
        myContract = await MyContract.deploy();
        await myContract.deployed();
    });

    it("should deposit and withdraw correctly", async function () {
        await myContract.deposit({ value: ethers.utils.parseEther("1") });
        expect(await myContract.balances(owner.address)).to.equal(ethers.utils.parseEther("1"));

        await myContract.withdraw(ethers.utils.parseEther("1"));
        expect(await myContract.balances(owner.address)).to.equal(0);
    });
});
