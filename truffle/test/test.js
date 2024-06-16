const PrivateBank = artifacts.require("PrivateBank");
//const { expect } = require("chai");

contract("PrivateBank", (accounts) => {
  let privateBank;

  before(async () => {
    privateBank = await PrivateBank.deployed();
  });

  //describe("deposit", () => {
    it("should allow a user to deposit ether", async () => {
      await privateBank.deposit({ from: accounts[0], value: web3.utils.toWei("1", "ether") });
      const balance = await privateBank.getUserBalance(accounts[0]);
      expect(balance.toString()).to.equal(web3.utils.toWei("1", "ether"));
    });
 // });

  //describe("withdraw", () => {
    it("should allow a user to withdraw their balance", async () => {
      const initialContractBalance = await privateBank.getBalance();
      await privateBank.deposit({ from: accounts[1], value: web3.utils.toWei("2", "ether") });
      
      await privateBank.withdraw({ from: accounts[1] });

      const userBalance = await privateBank.getUserBalance(accounts[1]);
      const finalContractBalance = await privateBank.getBalance();
      
      expect(userBalance.toString()).to.equal("0");
      expect(finalContractBalance.toString()).to.equal(initialContractBalance.toString());
    });

    it("should revert if the user has insufficient balance", async () => {
      try {
        await privateBank.withdraw({ from: accounts[2] });
        assert.fail("withdraw should have thrown an error");
      } catch (error) {
        expect(error.message).to.include("Insufficient balance");
      }
    });
  //});

  //describe("getBalance", () => {
    it("should return the correct contract balance", async () => {
      const contractBalance = await privateBank.getBalance();
      expect(contractBalance.toString()).to.equal(web3.utils.toWei("1", "ether"));
    });
 // });

 // describe("getUserBalance", () => {
    it("should return the correct user balance", async () => {
      const userBalance = await privateBank.getUserBalance(accounts[0]);
      expect(userBalance.toString()).to.equal(web3.utils.toWei("1", "ether"));
    });
  //});
});
