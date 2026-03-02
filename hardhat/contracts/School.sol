// SPDX-License-Identifier: MIT
pragma solidity ^0.8.;

contract School {

    // 👨‍🎓 Student struct
    struct Student {
        string name;
        bool enrolled;
    }

    // 👨‍🏫 Teacher struct
    struct Teacher {
        string name;
        uint256 courseFee; // fee in wei
    }

    Teacher public teacher;
    mapping(address => Student) public students;

    // Set teacher and course fee in constructor
    constructor(string memory _teacherName, uint256 _fee) {
        teacher = Teacher(_teacherName, _fee);
    }

    // ✅ Payable function: student enrolls by paying fee
    function enroll(string memory _studentName) public payable {
        require(msg.value == teacher.courseFee, "Incorrect fee");
        students[msg.sender] = Student(_studentName, true);
    }

    // Check contract balance
    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }
}