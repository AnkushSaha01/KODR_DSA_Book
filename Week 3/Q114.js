//Percentage of Letter in String

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");
let letter = prompt("Enter a letter: ");
str = str.toLowerCase();
letter = letter.toLowerCase();

let count = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
        count++;
    }
}

console.log(Math.floor((count / str.length) * 100) + "%");