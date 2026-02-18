// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract Anil{
    struct User{
        string name;
        string lname;
        uint age;
        address wallet;
    }

    mapping( address => User ) public users;
}