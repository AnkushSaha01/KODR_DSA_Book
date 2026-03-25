const prompt = require("prompt-sync")();

//Right Triangle - Alphabet Pattern

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += String.fromCharCode(64 + j);
    }
    console.log(str);
}