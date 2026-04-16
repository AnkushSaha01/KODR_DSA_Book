//Check Two Strings are Anagram or Not (Anagrams words have the same word length & same character count. Examples of anagram words are arc and car, state and taste, night and thing etc.)

const prompt = require("prompt-sync")();

let str1 = prompt("Enter first string: ");
let str2 = prompt("Enter second string: ");

if (str1.length !== str2.length) {
    console.log("The strings are not anagrams");
} else {
    let sortedStr1 = str1.toLowerCase().split("").sort().join("");
    let sortedStr2 = str2.toLowerCase().split("").sort().join("");
    if (sortedStr1 === sortedStr2) {
        console.log("The strings are anagrams");
    } else {
        console.log("The strings are not anagrams");
    }
}