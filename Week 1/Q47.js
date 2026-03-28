const prompt = require("prompt-sync")();

//Right Triangle - Number Pattern

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
        str += j;
    }
    console.log(str);
}