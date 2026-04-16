//Check if the string is Palindromic or not

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let reversedStr = "";

for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
}

if (str === reversedStr) {
    console.log("The string is a palindrome");
} else {
    console.log("The string is not a palindrome");
}
