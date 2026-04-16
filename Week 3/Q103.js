//Palindromic String using method and Two pointer algorithm (hint: Array reverse algo)

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let reversedStr = str.split("").reverse().join("");

if (str === reversedStr) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}
