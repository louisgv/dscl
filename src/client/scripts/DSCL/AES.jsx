import aesjs from 'aes-js';

export default class AES{
	constructor(){
		this.key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
	}

	encrypt(m) {
		const aesCtr = new aesjs.ModeOfOperation.ctr(this.key)
    const textBytes = aesjs.utils.utf8.toBytes(m);
		const encryptedBytes = aesCtr.encrypt(textBytes);
		const encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
		return encryptedHex;
	}

	decrypt(em) {
		const aesCtr = new aesjs.ModeOfOperation.ctr(this.key)
		const encryptedBytes = aesjs.utils.hex.toBytes(em);
		const decryptedBytes = aesCtr.decrypt(encryptedBytes);
		return aesjs.utils.utf8.fromBytes(decryptedBytes);
	}
}
