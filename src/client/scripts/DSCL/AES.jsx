import aesjs from 'aes-js';

export default class AES{
	constructor(){
		this.key = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ];
		this.aesCtr = new aesjs.ModeOfOperation.ctr(this.key)
	}

	encrypt(m) {
    const textBytes = aesjs.utils.utf8.toBytes(m);
    return this.aesCtr.encrypt(textBytes);
	}

	decrypt(encryptedBytes) {
		return this.aesCtr.decrypt(encryptedBytes);
	}
}
