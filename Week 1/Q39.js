//Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)
const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));
let times = Number(prompt("Enter the number of times to multiply: "));
let result = num;
for (let i = 1; i <= times; i++) {
    result *= num;
}
console.log(result);
