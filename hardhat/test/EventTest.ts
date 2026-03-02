import { network } from "hardhat";
import assert from "node:assert";
import { beforeEach, describe, it } from "node:test";




describe("MyTest",async ()=>{
    let escrow:any;
    let publicClient:any;
    let receipt:any;
    
    //before
    beforeEach(async ()=>{
        const { viem } = await network.connect();

        escrow = await viem.deployContract("Escrow");
        const hash = await escrow.write.createEscrow();
        receipt = await publicClient.waitForTransactionReceipt({ hash });
        publicClient = await viem.getPublicClient();
    });

    //it()
    //it()
    //it()
    //it()
    
    it("Should return the event",async ()=>{
            const logs = await publicClient.getContractEvents({
                address: escrow.address,
                abi: escrow.abi,
                eventName: "LogMsg",
                fromBlock: receipt.blockNumber,
                toBlock: receipt.blockNumber,
            });
            //console.log('logs[0] >>',logs[0].args.message);
            assert.equal(logs[0].args.message,"Hello from Anil Dollor");

    });
});