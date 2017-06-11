import {bonds} from 'oo7-parity';
var DH = require("./DHUtils")

export function initalRequest(otherAddress) {
  contractAddress =  0xA0A9F9A55380D8357C2Cf7095afbADEa10233610
  var abi = [[{"constant":false,"inputs":[{"name":"to","type":"address"},{"name":"gA","type":"int256"}],
  "name":"requestCommunication","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":
  [{"name":"to","type":"address"},{"name":"gB","type":"int256"},{"name":"IPFS_ref","type":"string"}],
  "name":"respondToRequest","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":
  [{"name":"to","type":"address"},{"name":"IPFS_ref","type":"string"}],"name":"sendPayload","outputs":[],
  "payable":false,"type":"function"},{"inputs":[],"payable":false,"type":"constructor"},{"anonymous":false,
  "inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},
  {"indexed":false,"name":"IPFS_ref","type":"string"}],"name":"IPFS_only","type":"event"},{"anonymous":false,
  "inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"to","type":"address"},
  {"indexed":false,"name":"gB","type":"int256"},{"indexed":false,"name":"IPFS_ref","type":"string"}],
  "name":"diffie_IPFS","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},
  {"indexed":false,"name":"to","type":"address"},{"indexed":false,"name":"gA","type":"int256"}]
  ,"name":"diffie_only","type":"event"}]] //https://github.com/paritytech/parity/wiki/Tutorial-Part-6

  var contractObj = makeContractAddress(contractAddress);
  var myDH = new DH();
  gA = myDH.ga();
  sendCommunicationRequest(contractObj, otherAddress, gA)
}

function makeContractObject(contractAddress, abi){
  contractObj = bonds.makeCountract(contractAddress, abi)
  return contractObj
}

function sendCommunicationRequest(contractObj, otherAddress, gA) {
    contractObj.requestCommunication(otherAddress, gA) //gA is the first diffie helman (G^a)
}

function sendPayload(contractObj, otherAddress, encryptedpayload) {

}
