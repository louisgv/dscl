export const DSCL_CONTRACT_HASH = '0x8C0D3Ac822AAb40a1a2277D7d72cb0D2A71A7cE1';

export const DSCL_CONTRACT_ABI = [
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "gB",
        "type": "string"
      },
      {
        "name": "IPFS_ref",
        "type": "string"
      }
    ],
    "name": "respondToRequest",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "IPFS_ref",
        "type": "string"
      }
    ],
    "name": "sendPayload",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "to",
        "type": "address"
      },
      {
        "name": "gA",
        "type": "string"
      }
    ],
    "name": "requestCommunication",
    "outputs": [],
    "payable": false,
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "IPFS_ref",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timestampt",
        "type": "uint256"
      }
    ],
    "name": "IPFS_only",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "gB",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "IPFS_ref",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timestampt",
        "type": "uint256"
      }
    ],
    "name": "diffie_IPFS",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "from",
        "type": "address"
      },
      {
        "indexed": true,
        "name": "to",
        "type": "address"
      },
      {
        "indexed": false,
        "name": "gA",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "timestampt",
        "type": "uint256"
      }
    ],
    "name": "diffie_only",
    "type": "event"
  }
];
