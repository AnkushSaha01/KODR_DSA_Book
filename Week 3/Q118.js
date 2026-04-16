//Greatest English Letter in Upper and Lower Case
// The goal of this problem is to find the "greatest" letter in a given string that appears in both its lowercase and uppercase forms.

// In this context, "greatest" refers to the letter that appears latest in the alphabetical order (e.g., 'Z' is greater than 'A').

// Requirements
// Dual Presence: The letter must exist in the string as both x (lowercase) and X (uppercase).

// Lexicographical Order: If multiple letters satisfy the first condition, return the one that comes last in the alphabet.

// Default Case: If no such letter exists, return an empty string "".

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let upper = [];
let lower = [];

for (let i = 0; i < str.length; i++) {
    if (str[i] >= "a" && str[i] <= "z") {
        lower.push(str[i]);
    }
    if (str[i] >= "A" && str[i] <= "Z") {
        upper.push(str[i]);
    }
}

let result = "";

for (let i = 0; i < lower.length; i++) {
    for (let j = 0; j < upper.length; j++) {
        if (lower[i] === upper[j].toLowerCase()) {
            if (lower[i] > result) {
                result = lower[i];
            }
        }
    }
}

console.log(result);
