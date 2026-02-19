// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract UserRegistry {

    // ENUM → represents user state
    enum Status {
        None,       // default
        Active,
        Suspended
    }

    // STRUCT → store user data
    struct User {
        string name;
        uint age;
        Status status;
    }

    // Mapping → wallet => user
    mapping(address => User) public users;

    // Prevent double registration
    mapping(address => bool) public registered;

    error AlreadyRegistered();
    error NotRegistered();

    // Register user
    function register(string memory _name, uint _age) public {

        if(registered[msg.sender]){
            revert AlreadyRegistered();
        }

        users[msg.sender] = User({
            name: _name,
            age: _age,
            status: Status.Active
        });

        registered[msg.sender] = true;
    }

    // Suspend user
    function suspend(address _user) public {

        if(!registered[_user]){
            revert NotRegistered();
        }

        users[_user].status = Status.Suspended;
    }

    // Helper getter
    function getUser(address _user)
        public
        view
        returns(string memory, uint, Status)
    {
        User memory u = users[_user];
        return (u.name, u.age, u.status);
    }
}
