// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract ModifierTest{
    //1. Property
    //Type visibilityModier VariableName
    uint public x; 
    address public myAddress;

    //4. Events
    //5. Modiers == Middlewares
    //modifier name should be in camleCase
    modifier onlyOwner(){
        //Check the condition
        /*
            if(Condition){
                True
            }else{
                False
            }
         */
        require(msg.sender == myAddress, "Not Owner!");
        _;
        
    }   

    //2. Constructor
    constructor(){
        x = 10;
        myAddress = msg.sender; // msg.sender is a global solidity variable will return the addr of the person who is deploying the contract

    }

    //3. Method // Naming Convention should camleCase`
    function setValueX(uint _num) public onlyOwner{
        x = _num;
    }

    

}