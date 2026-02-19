// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract MappingTest{

    //mapping(key => value) visibilityModifier VariableName;
    mapping( address => uint ) public favNo;
    mapping(address => bool) public hasSet;

    //1. Property / State Variable

    //2. Constructor

    //3. Method/Functions
    // Save your favorite number
    function setFavNo(uint _favoriteNumber) public{
        require(!hasSet[msg.sender], "Already set!");
        // if(hasSet[msg.sender]){

        //     revert("Already set!");

        // } else {

        //     favNo[msg.sender] = _favoriteNumber;
        //     hasSet[msg.sender] = true;

        // }

        favNo[msg.sender] = _favoriteNumber;
        hasSet[msg.sender] = true;
    }


    // Read your favorite number
    function getFavNo() public view returns(uint){
        return favNo[msg.sender];
    }

    
}