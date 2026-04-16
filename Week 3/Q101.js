//Accept a string and print it in reverse order

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
}