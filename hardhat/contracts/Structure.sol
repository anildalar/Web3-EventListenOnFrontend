// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

contract Structure{

    //1. Property
     // type visibility variable
        // Anil
        // Dollor
     string public name="Anil";
     string public surname="Dollor";

    //4. Events
    //5. Modifiers
    //6. Structs is datastructure
    // 6.1 Define the structure
    struct Student{
        //type variablename
        string name;
        string surname;
    }
    struct Teacher{
        //type variablename
        string name;
        string surname;
    }


    //lets create variable/property of structure = create class external object
    // type visibility variable
    Student[] public students;
    Teacher[] public teachers;

    //2. constructor

    //3. method

    function addStudent(string memory _fa1,string memory _fa2) public{ //camleCase
            students.push(Student(_fa1,_fa2));
    }
    // 🔍 Get total students
    function getStudentCount() public view returns (uint) {
        return students.length;
    }

}