import {createDiffieHellman} from 'diffie-hellman/browser'
// import {}
var shake_128 = require('js-sha3').shake_128;

export default class DHUtils{

	constructor(){
		this.myDH = createDiffieHellman("modp16") //modp2 is 1024 bit prime
		// this.myDH2 = createDiffieHellman("modp16") //for testing purposes
	}

	calculateSecretKey(gB) {
	    const gAB = this.myDH.computeSecret(gB)
	    const hash_gAB = shake_128(gAB, 128) //128 bits?
	    return hash_gAB
	}

	get ga() {
	    return this.myDH.generateKeys()


	}
}

// var gA = this.myDH1.generateKeys()
//
// var gB = this.myDH2.generateKeys()
//
// // var t1 = "f138"
// // var t2 = 10101
// // var t3 = "7087"
// // const t4 = 393
// // const t5 = "4949f3"
//
// var gAB = this.myDH1.computeSecret(gB)
// const hash_gAB = shake_128(gAB, 128) //128 bits?
// return hash_gAB
// // const hash_gAB = shake_128(gAB, 128) //128 bits?
// // return hash_gAB
