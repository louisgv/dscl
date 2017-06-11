import {bonds} from 'oo7-parity';
var DH = require("./DHUtils")

// TODO: Add export like this: `export function makeContractObject ...`
export function initalRequest(otherAddress) {
  contractAddress = ... //TODO: add contract address after deployed
  var abi = [{"enter fully ABI definition json object here"}] //https://github.com/paritytech/parity/wiki/Tutorial-Part-6
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
