pragma solidity ^0.4.12;

contract DSCL {

    function DSCL(){}

    event IPFS_only(address from, address indexed to, string IPFS_ref, uint timestampt);
    event diffie_IPFS(address from, address indexed to, string gB, string IPFS_ref, uint timestampt);
    event diffie_only(address from, address indexed to, string gA, uint timestampt);

    // this function sends the IPFS refence from user A to B
    // both user's can then query IPFS and unecrypt the data outside the contract
    function sendPayload(address to, string IPFS_ref) {
          IPFS_only(msg.sender, to, IPFS_ref, now);
    }

    //this is the second part of diffie helman
    function respondToRequest(address to, string gB, string IPFS_ref) {
          diffie_IPFS(msg.sender, to, gB, IPFS_ref, now);
    }

    // sends the diffie helman key (G^A) to user B.
    function requestCommunication(address to, string gA) {
          diffie_only(msg.sender, to, gA, now);
    }
}
