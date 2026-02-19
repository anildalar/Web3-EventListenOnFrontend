import { network } from "hardhat";
import assert from "node:assert/strict";
import { describe, it, beforeEach } from "node:test";

describe("UserRegistry", () => {

    let viem:any;
    let contract:any;

    beforeEach(async () => {

        const conn = await network.connect();
        viem = conn.viem;

        contract = await viem.deployContract("UserRegistry");
    });

    // ✅ Register user
    it("Should register a user", async () => {

        await contract.write.register(["Anil", 25n]);

        const user = await contract.read.users([
            (await viem.getWalletClients())[0].account.address
        ]);

        assert.equal(user[0], "Anil"); // name
        assert.equal(user[1], 25n);    // age
        assert.equal(Number(user[2]), 1); // enum
    });


    // ✅ Prevent double registration
    it("Should revert if registering twice", async () => {

        await contract.write.register(["Anil", 25n]);

        await viem.assertions.revertWithCustomError(
            contract.write.register(["Anil", 30n]),
            contract,
            "AlreadyRegistered"
        );
    });


    // ✅ Suspend user
    it("Should suspend a user", async () => {

        const [wallet] = await viem.getWalletClients();

        await contract.write.register(["Bob", 40n]);

        await contract.write.suspend([wallet.account.address]);

        const [, , status] = await contract.read.users([wallet.account.address]);

        assert.equal(Number(status), 2);
    });


    // ✅ Another wallet registers
    it("Different wallet should register separately", async () => {

        const [, secondWallet] = await viem.getWalletClients();

        await contract.write.register(
            ["Alice", 22n],
            { account: secondWallet.account }
        );

        // ✅ Read SAME wallet
        const [name] = await contract.read.getUser([
            secondWallet.account.address
        ]);

        assert.equal(name, "Alice");
    });

});
