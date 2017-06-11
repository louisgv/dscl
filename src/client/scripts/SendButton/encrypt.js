var aesjs = require('aes-js');

function encrypt(m) {
    var textBytes = aesjs.utils.utf8.toBytes(m);
    aesjs.ModeOfOperation.ctr(key)
    var encryptedBytes = aesCtr.encrypt(textBytes);

}
