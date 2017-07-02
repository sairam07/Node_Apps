var crypto = require('crypto-js');

var person = {
	name: 'sairam',
	secretMessage: 'This is a secret Message'
};
var secretKey = 'abc123';

//var personString = JSON.stringify(person); refactor

//Encryption
//var encryptedMessage = crypto.AES.encrypt(personString, secretKey);
var encryptedMessage = crypto.AES.encrypt(JSON.stringify(person), secretKey);
console.log("Secret Message", encryptedMessage.toString());
//console.log("Secret Message with out to Strong ---", encryptedMessage);

console.log("*************************************************");
//Decryption
var bytes = crypto.AES.decrypt(encryptedMessage,secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

console.log("Decrypted message", decryptedMessage);

console.log("*************************************************");

//converting Decrypted Message to Object
var finalresult = JSON.parse(decryptedMessage);
console.log("Final object", finalresult);