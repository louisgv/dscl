
import {
	bonds, formatBalance, isNullData
} from 'oo7-parity';

import IPFS from 'ipfs';
import OrbitDB from 'orbit-db';

import {
	DSCL_CONTRACT_HASH,
	DSCL_CONTRACT_ABI
} from './abi'

import AES from './AES';
import DH from './DH';

export default class DSCLUtils {
	constructor() {
		this.aes = new AES();
		this.dh = new DH();

		this.ipfs = new IPFS()
		this.orbitdb = new OrbitDB(this.ipfs)

		this.contract = bonds.makeContract(DSCL_CONTRACT_HASH, DSCL_CONTRACT_ABI);

		this.kv = orbitdb.kvstore('dscl');

		this.sessionMap = {};
	}

	get(key) {
		return this.kv.get(key)
	}

	async set(key, value) {
		return this.kv.set(key, value);
	}

	/*
		Send ga to the recipent
	*/
	requestCommunication(otherAddress){
		// TODO: Assign

		const {ga} = this.dh;

		this.sessionMap[otherAddress] = {ga};

		this.contract.requestCommunication(otherAddress, ga);
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
