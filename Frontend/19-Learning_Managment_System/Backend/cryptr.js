const Cryptr = require("cryptr");
const cryptr = new Cryptr("@SecretKeyForEncryption&Decryption");

function encryptPassword(password) {
    let encryptedPassword = cryptr.encrypt(password);
    return encryptedPassword;
}

function decryptPassword(encryptedPassword) {
    let decryptedPassword = cryptr.decrypt(encryptedPassword);
    return decryptedPassword;
}


module.exports.encryptPassword = encryptPassword;
module.exports.decryptPassword = decryptPassword;

// let en = encryptPassword("admin");
// console.log(en);

// let de = decryptPassword(en);
// console.log(de);