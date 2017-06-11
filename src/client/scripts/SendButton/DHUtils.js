import {createDiffieHellman} from 'diffie-hellman/browser';

export default class DHUtils{

	constructor(){
		this.myDH = createDiffieHellman("modp2") //modp2 is 1024 bit prime
	}

	calculateSecretKey(gB) {
	    const gAB = this.myDH.computeSecret(gB)
	    const hash_gAB = parity.api.util.sha3(gAB) //128 bits??
	    return hash_gAB
	}

	calculate_gA() {
	    const gA = this.myDH.generateKeys()
	    return gA
	}
}
