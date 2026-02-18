// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EventTest { //PascalCase
    //1 Property/State Variable

    //4. Events
    // PaymentTransfered
    //1. EventName should be in PascalCase
    //2. EventName should be in Past Tense
    //from = "0xdf3e18d64bc6a983f673ab319ccae4f1a57c709"
    //msg = "Good Morning"
    event MessageSent(address indexed from, string message);

    //2. Constructor


    //3. Methods
    /*
    function functionName(type _fa) visibilityModifier { //camleCase
    }
    
     */
    function sendMessage(string calldata _msg) external {
        emit MessageSent(msg.sender, _msg);
    }
}
