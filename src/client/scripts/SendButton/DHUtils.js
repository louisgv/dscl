import {createDiffieHellman} from 'diffie-hellman/browser';

// NOTE: These two are equivalent. 
// var shake_128 = require('js-sha3').shake_128;
import {shake_128} from 'js-sha3';

export default class DHUtils{

	constructor(){
		this.myDH = createDiffieHellman("modp2") //modp2 is 1024 bit prime
	}

	calculateSecretKey(gB) {
	    //const gAB = this.myDH.computeSecret(gB)
	    //const hash_gAB = shake_128(gAB, 128) //128 bits??
	    // return hash_gAB
			return 353
	}

	get ga() {
	    return this.myDH.generateKeys()
	}
}
