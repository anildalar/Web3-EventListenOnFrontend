// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract EventTest {

    event MessageSent(address indexed from, string message);

    function sendMessage(string calldata _msg) external {
        emit MessageSent(msg.sender, _msg);
    }
}
