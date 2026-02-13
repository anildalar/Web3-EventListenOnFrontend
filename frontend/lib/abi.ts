export const abi = [
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
  ] as const
