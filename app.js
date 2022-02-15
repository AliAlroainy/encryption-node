// crypto module
const crypto = require("crypto");

const prompt = require("prompt-sync")();


const algorithm = "aes-256-cbc"; 

// generate 16 bytes of random data
const initVector = crypto.randomBytes(16);

//input 
const password = prompt("write is your password: ");

// protected data

// secret key generate 32 bytes of random data
const Securitykey = crypto.randomBytes(32);

// the cipher function
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);

// encrypt the password
// input encoding
// output encoding
let encryptedData = cipher.update(password, "utf-8", "hex");

encryptedData += cipher.final("hex");

console.log("Encrypted password: " + encryptedData);

// the decipher function
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);

let decryptedData = decipher.update(encryptedData, "hex", "utf-8");

decryptedData += decipher.final("utf8");

console.log("Decrypted password: " + decryptedData);