//Count vowels and consonants in a string

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let vowels = 0;
let consonants = 0;

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        vowels++;
    } else {
        consonants++;
    }
}

console.log("Vowels: " + vowels);
console.log("Consonants: " + consonants);