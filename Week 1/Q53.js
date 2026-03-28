const prompt = require("prompt-sync")();

//X pattern

for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 1; j <= 5; j++) {
        if (i === j || i + j === 6) {
            str += "*";
        } else {
            str += " ";
        }
    }
    console.log(str);
}