const prompt = require("prompt-sync")();

//Triangle Pattern

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5 - i; j++) {
        str += " ";
    }
    for (let k = 1; k <= 2 * i - 1; k++) {
        str += "*";
    }
    console.log(str);
}