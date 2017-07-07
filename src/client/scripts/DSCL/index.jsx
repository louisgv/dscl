import {
	bonds
} from 'oo7-parity';

import aesjs from 'aes-js';

import IPFS from 'ipfs';

import { getDiffieHellman } from 'diffie-hellman/browser';

import {
	shake_128,
} from 'js-sha3';

import {
	DSCL_CONTRACT_HASH,
	DSCL_CONTRACT_ABI,
} from './abi';

export default class DSCL {
  constructor({
		handleInvite, // Guest send an invite to host
		handleHostInfo, // Host send his connect info to guest
		handleGuestInfo // Guest send his connect info to host
	}) {
		this.initTime = Date.now();

    this.dh = getDiffieHellman("modp16");

		this.ipfs = new IPFS({
			repo: 'DSCL',
		});

		this.ipfs.on('ready', async () => {
			this.ipfsReady = true;
		});

    this.contract = bonds.makeContract(DSCL_CONTRACT_HASH, DSCL_CONTRACT_ABI);

		this.contract.diffie_only({ to: bonds.me })
			.tie(handleInvite)

		this.contract.diffie_IPFS({ to: bonds.me })
			.tie(handleHostInfo)

		this.contract.IPFS_only({ to: bonds.me })
			.tie(handleGuestInfo)
  }

	setOtherAddress(value){
		this.otherAddress = value;
	}

	setOtherGX(value) {
		this.otherGX = value;
	}

	setSharedKey() {
		if (!this.otherGX) throw new Error('Did not receive other gx');

		const gxBytes = aesjs.utils.hex.toBytes(this.otherGX);

		const gAB = this.dh.computeSecret(new Uint8Array(gxBytes));

		this.key = aesjs.utils.hex.toBytes(shake_128(gAB, 128));
	}

	get gx(){
		return aesjs.utils.hex.fromBytes(this.dh.generateKeys());
	}

	isDataValid(data){
		return (
			data &&
			data.length > 0 &&
			data[data.length - 1].timestampt.c[0]*1000 > this.initTime
		);
	}

	sendInvite() {
		this.contract.requestCommunication(this.otherAddress, this.gx);
	}

	async reply(data, initiator) {
		const gx = initiator ? this.gx : undefined;

		const multihash = await this.storeEncrypted(data);

		if (initiator) {
			this.contract.respondToRequest(this.otherAddress, gx, multihash);
		} else {
			this.contract.sendPayload(this.otherAddress, multihash);
		}
	}

	async storeEncrypted(data) {
		const encryptedData =
			this.encrypt(JSON.stringify(data));

		const node = await this.store(encryptedData);

		return node.toJSON().multihash;
	}

  encrypt(m) {
    if (!this.key) this.setSharedKey();

    const aesCtr = new aesjs.ModeOfOperation.ctr(this.key);
    const textBytes = aesjs.utils.utf8.toBytes(m);
    const encryptedBytes = aesCtr.encrypt(textBytes);
    const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
    return encryptedHex;
  }

  decrypt(em) {
    if (!this.key) this.setSharedKey();

    const aesCtr = new aesjs.ModeOfOperation.ctr(this.key);
    const encryptedBytes = aesjs.utils.hex.toBytes(em);
    const decryptedBytes = aesCtr.decrypt(encryptedBytes);
    return aesjs.utils.utf8.fromBytes(decryptedBytes);
  }

  get(multihash) {
    if (!this.ipfsReady) throw new Error(`IPFS is not ready`);

    return this.ipfs.object.data(multihash);
  }

  store(value) {
    if (!this.ipfsReady) throw new Error(`IPFS is not ready`);

    const data = new Buffer(value);

    return this.ipfs.object.put(data);
  }
}
