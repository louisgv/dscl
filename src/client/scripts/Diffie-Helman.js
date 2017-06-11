var browserDH = require('./lib/diffie-helman/browser.js')
var myDH;

function calculate_gA() {
    myDH = browserDH.createDiffieHellman("modp2") //modp2 is 1024 bit prime
    var gA = myDH.prototype.generateKeys()
    return gA
}

function calculate_secret_key(gB) {
    var gAB = myDH.prototype.computeSecret(gB)
    var hash_gAB = parity.api.util.sha3(gAB) //128 bits??
    return hash_gAB
}
