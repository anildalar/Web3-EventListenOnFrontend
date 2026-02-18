'use client'
//1. Import Area
import React from 'react'
import { useWatchContractEvent } from 'wagmi';

//2. Function defination area
let page = function page() {
  //2.1 Hooks Area
  // 
  /*
  JS Object
  {
    1 . P:V
    2. Function/Method
  }
  
  */
  useWatchContractEvent({
    address:"0x5fbdb2315678afecb367f032d93f642f64180aa3",
    abi:[
            {
              "anonymous": false,
              "inputs": [
                {
                  "indexed": true,
                  "internalType": "address",
                  "name": "from",
                  "type": "address"
                },
                {
                  "indexed": false,
                  "internalType": "string",
                  "name": "message",
                  "type": "string"
                }
              ],
              "name": "MessageSent",
              "type": "event"
            },
            {
              "inputs": [
                {
                  "internalType": "string",
                  "name": "_msg",
                  "type": "string"
                }
              ],
              "name": "sendMessage",
              "outputs": [],
              "stateMutability": "nonpayable",
              "type": "function"
            }
          ],
    eventName:"MessageSent",
    onLogs(logs) {
      console.log('New logs!', logs[0].args.message);
      alert(logs[0]?.args?.message);
    },
  })

  //2.2

  //2.3
  return (
    <div>page</div>
  )
}


//3. Export area

export default page;