// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.26;

contract Escrow{
    //1. Properties/ State Variables
    address public arbitrator;
    uint256 public transactionCounter;
    //4. Events
    event LogMsg(string message);
    //5. Modifiers
    modifier onlyArbitrator(){
        require(msg.sender == arbitrator, "Only the arbitrator can perform this action.");
        _;
    }

    //6. Enums
        //6.1 Create Enums
    enum EscrowStatus { Created, Locked, Released, Refunded, Dispute }
    //7. Structs
    struct EscrowTransaction{
        address buyer;
        address seller;
        uint256 amount;
        EscrowStatus status;
    }
    //8. Mapping
    mapping (uint256 => EscrowTransaction) escrowTransactions;
    //9. Errors

    //2. Constructor
    constructor(){
        // I want to set the address of arbitrator as contract owner
        arbitrator = msg.sender; // msg.sender is a global object which
        transactionCounter = 0;
    }

    //3. Methods
    function createEscrow(address buyer, address seller) external payable onlyArbitrator {
        uint256 transactionId = transactionCounter;
        transactionCounter++;

        escrowTransactions[transactionId] = EscrowTransaction({
            buyer: buyer,
            seller: seller,
            amount: msg.value,//number of wei sent with the message i.e default 0
            status: EscrowStatus.Created
        });

        emit LogMsg("Hello from Anil Dollor");
    }

}