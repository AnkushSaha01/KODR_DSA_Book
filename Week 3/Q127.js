//Reverse Prefix of Word
// You are given a 0-indexed string word and a character ch.

// Find the first occurrence of the character ch in word.

// Reverse the segment of word that starts at index 0 and ends at the index of the first occurrence of ch (inclusive).

// If the character ch does not exist in word, do nothing and return the original string.


let word = "abcdefgh";
let ch = "d";

function reversePrefix(word, ch){
    let index = word.indexOf(ch);
    if(index === -1){
        return word;
    }
    let prefix = word.slice(0, index + 1);
    let suffix = word.slice(index + 1);
    return prefix.split("").reverse().join("") + suffix;
}

console.log(reversePrefix(word, ch));