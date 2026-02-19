import { network } from "hardhat";
import assert from "node:assert/strict";
import { beforeEach, describe, it } from "node:test";

describe("Test 1", ()=>{
    let viem:any;
    let contract:any;

    beforeEach(async () => {
        const connection = await network.connect();
        viem = connection.viem;
        contract = await viem.deployContract("MappingTest");
    });

    //Test 1 it should store fav number
    it("Should store favorite number",async ()=>{
        await contract.write.setFavNo([7n]);
        const value = await contract.read.getFavNo();
        assert.equal(value, 7n);
    });
    
    //Test 2 it should revert if setting twice
    it("Should revert when user sets number twice",async ()=>{
        await viem.assertions.revertWith(
            contract.write.setFavNo([10n])
        );
    });

    // ✅ Test 3 — Another wallet SHOULD work
    it("Another wallet should still set number", async () => {
        const [, secondWallet] = await viem.getWalletClients();
        await contract.write.setFavNo(
            [99n],
            {
                account: secondWallet.account
            }
        );
        const value = await contract.read.favNo([
            secondWallet.account.address
        ]);
        assert.equal(value, 99n);
    });
});