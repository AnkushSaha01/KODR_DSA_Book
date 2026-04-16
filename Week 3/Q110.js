//Accept a string and print the frequency of each character present in the string

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let frequency = {};

for (let i = 0; i < str.length; i++) {
    if (frequency[str[i]]) {
        frequency[str[i]]++;
    } else {
        frequency[str[i]] = 1;
    }
}

console.log(frequency);
