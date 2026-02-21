import { network } from "hardhat";
import assert from "node:assert";
import { describe, it } from "node:test";




describe("",async ()=>{
    const { viem }    =  await network.connect();

    
    //before
    //beforeEach

    it("Should return the student counts",async ()=>{

        //let create contract object
        let contract = await viem.deployContract("Structure");
        console.log('contract >>',contract);

        await contract.write.addStudent(["Palak","Agrwal"]);
        await contract.write.addStudent(["Astha","Agrwal"]);
        await contract.write.addStudent(["Vijay","Agrwal"]);
        await contract.write.addStudent(["Nidhi","Agrwal"]);


        let studentCount = await contract.read.getStudentCount();
        //console.log('studentCount >>>',studentCount);

        assert.equal(studentCount,50n)
    });
    //it();
    //it();
    //it();
    //it()
});