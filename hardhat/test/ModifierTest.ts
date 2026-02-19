import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { network } from "hardhat";

describe("ModifierTest Contract", async function () {

  const { viem } = await network.connect();

  // ✅ Test 1 — Check Owner
  it("Should set deployer address as owner", async function () {

    const [deployer] = await viem.getWalletClients();

    const contract = await viem.deployContract("ModifierTest");

    const owner = await contract.read.myAddress();

    assert.equal(owner, deployer.account.address);
  });


  // ✅ Test 2 — Owner can update x
  it("Owner should update x", async function () {

    const contract = await viem.deployContract("ModifierTest");

    await contract.write.setValueX([55n]);

    const value = await contract.read.x();

    assert.equal(value, 55n);
  });


  // ✅ Test 3 — Non Owner should FAIL
  it("Non-owner should NOT call setValueX", async function () {

    const [, attacker] = await viem.getWalletClients();

    const contract = await viem.deployContract("ModifierTest");

    try {

      await contract.write.setValueX(
        [99n],
        {
          account: attacker.account
        }
      );

      assert.fail("Expected transaction to revert");

    } catch (err) {

      // Optional: check revert message
      assert.ok(
        err.message.includes("Not Owner!")
      );
    }
  });

});
