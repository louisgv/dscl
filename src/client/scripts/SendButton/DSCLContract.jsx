import DHUtils from './DHUtils';

import {
	bonds, formatBalance, isNullData
} from 'oo7-parity';

import {
	DSCL_CONTRACT_HASH,
	DSCL_CONTRACT_ABI
} from './abi'

export default class DSCLContract {
	constructor() {
		this.dh = new DHUtils();
		this.contract = bonds.makeContract(DSCL_CONTRACT_HASH, DSCL_CONTRACT_ABI);
	}

	/*
		Send ga to the recipent
	*/
	requestCommunication(otherAddress){
		this.currentGA = this.dh.ga;
		this.contract.requestCommunication(
			otherAddress, this.currentGA
		);
	}

	/*
		Send gb and the encrypted payload back to the recipent
	*/
	respondToRequest(otherAddress, encryptedPayload) {
		this.contract.respondToRequest();
	}

	sendPayload(){

	}
}
