import {createDiffieHellman} from 'diffie-hellman/browser';
<<<<<<< HEAD
// import {}
var shake_128 = require('js-sha3').shake_128;
=======

// NOTE: These two are equivalent. 
// var shake_128 = require('js-sha3').shake_128;
import {shake_128} from 'js-sha3';
>>>>>>> 96016dc849e894727d9a4f858590718c01ab615e

export default class DHUtils{

	constructor(){
		this.myDH1 = createDiffieHellman("modp16") //modp2 is 1024 bit prime
		this.myDH2 = createDiffieHellman("modp16")
	}

	calculateSecretKey(gB) {
	    const gAB = this.myDH.computeSecret(gB)
	    const hash_gAB = shake_128(gAB, 128) //128 bits?
	    return hash_gAB
			// return 8223984570434309534895
	}

	get ga() {
	    //return this.myDH.generateKeys()

			var gA = this.myDH1.generateKeys()

			var gB = this.myDH2.generateKeys()

			// var t1 = "f138"
			// var t2 = 10101
			// var t3 = "7087"
			// const t4 = 393
			// const t5 = "4949f3"

			var gAB = this.myDH1.computeSecret(gB)
			const hash_gAB = shake_128(gAB, 128) //128 bits?
			return hash_gAB
	    // const hash_gAB = shake_128(gAB, 128) //128 bits?
	    // return hash_gAB
	}
}
