import {
	bonds,
	formatBalance,
	isNullData
} from 'oo7-parity';

import IPFS from 'ipfs';

import {
	DSCL_CONTRACT_HASH,
	DSCL_CONTRACT_ABI
} from './abi'

import AES from './AES';
import DH from './DH';

export default class DSCL {
	constructor() {
		this.aes = new AES();
		this.dh = new DH();

		this.contract = bonds.makeContract(DSCL_CONTRACT_HASH, DSCL_CONTRACT_ABI);

		this.sessionMap = {};

		// this.kv = this.orbitdb.kvstore('dscl');
		this.ipfs = new IPFS({
			repo: 'DSCL'
		});

		this.ipfs.on('ready', async function () {
			this.ipfsReady = true;
		}.bind(this))
	}

	encrypt = () => this.aes.encrypt

	decrypt = () => this.aes.decrypt

	get(multihash) {
		if(!this.ipfsReady) throw new Error(`IPFS is not ready`);

		return this.ipfs.object.data(multihash);
	}

	store(value) {
		if(!this.ipfsReady) reject(new Error(`IPFS is not ready`));

		const data = new Buffer(JSON.stringify(value));

		return this.ipfs.object.put(data);
	}

	/*
		Send ga to the recipent
	*/
	requestCommunication(otherAddress) {
		// TODO: Assign

		const {
			ga
		} = this.dh;

		this.sessionMap[otherAddress] = {
			ga
		};

		this.contract.requestCommunication(otherAddress, ga);
	}

	/*
		Send gb and the encrypted payload back to the recipent
	*/
	respondToRequest(otherAddress, encryptedPayload) {
		this.contract.respondToRequest();
	}

	sendPayload() {

	}
}
