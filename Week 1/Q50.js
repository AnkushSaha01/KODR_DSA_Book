const prompt = require("prompt-sync")();

//Mirrored Right Triangle Pattern

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5-i; j++) {
        str += " ";
    }
    for (let k = 1; k <= i; k++) {
        str += "*";
    }
    console.log(str);
}