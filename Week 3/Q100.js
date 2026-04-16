//Accept a string from user and print its each character on a new line

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
}