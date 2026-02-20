import assert from "node:assert/strict";
//import {} from 'somelib/somelocation';
import { network } from "hardhat";
import { before, beforeEach, describe, it } from "node:test";


describe("I want to test if non owner can set the variable or not",async ()=>{
    //network is a js object

    //object.members
    //object.property
    //object.method();

    //This is an example Object destructuing
    const { viem } = await network.connect();

    console.log('viem >>>',viem);

    // beforeEach(()=>{
    //     console.log("Hello from before function");
    // }); //ES6
    //Test 1
    it("Should set deployer address as owner",async ()=>{
        console.log("I am running Test No 1");
        //THis is an example array destructing
        //const x = await viem.getWalletClients();
        //console.log('x >>',x);
        const [deployer] = await viem.getWalletClients();
        console.log('deployer>>',deployer);
        const myContract = await viem.deployContract("ModifierTest");
        console.log('myContract>>>>',myContract);
        const myAddr = await myContract.address; 
        console.log('myContract.address >>>',myAddr);

        const owner = await myContract.read.myAddress()
        const x = deployer.account.address;
        console.log('owner >>',owner);
        console.log('x>>',x);
        assert.equal(owner.toLowerCase(), deployer.account.address);
    });

    // Test 2
    it("Owner should update x",async()=>{
        const contract = await viem.deployContract("ModifierTest");
        console.log('contract >>>',contract);
        //console.log('contract.write >>>',contract.write.setValueX());
                    //object.method(aa);
        await contract.write.setValueX([20n]); // n = BigInt DataType

        let value = await contract.read.x();
        //console.log('value >>>',value);
        assert.equal(value, 20n);
    });

    it("Non-Ownwer should not able to update value of x",async ()=>{

            const [  , attckr] = await viem.getWalletClients();
            console.log('attckr >>>',attckr);

            let contract = await viem.deployContract("ModifierTest");

            try {
            //  await object.property.method(aa1,aa2);
                await contract.write.setValueX([50n],{
                    account: attckr.account
                });
                assert.fail("Expected transaction to revert");
            } catch (error) {
                // Optional: check revert message
                    
        }

    });

});