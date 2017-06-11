import {bonds} from 'oo7-parity';

// TODO: Add export like this: `export function makeContractObject ...`
function makeContractObject(contractAddress){
  const ABI = [{"enter fully ABI definition json object here"}] //https://github.com/paritytech/parity/wiki/Tutorial-Part-6
  contractObj = bonds.makeCountract(contractAddress, ABI)
  return contractObj
}

function sendCommunicationRequest(contractObj, otherAddress, gA) {
    contractObj.initCommunication(otherAddress, gA) //gA is the first diffie helman (G^a)
}
