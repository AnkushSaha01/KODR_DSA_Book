//Rearrange Characters to Make Target String



const prompt = require("prompt-sync")();

let s = prompt("Enter a string: ");
let target = prompt("Enter a target string: ");

let sCount = {};
let targetCount = {};

for (let i = 0; i < s.length; i++) {
    sCount[s[i]] = (sCount[s[i]] || 0) + 1;
}

for (let i = 0; i < target.length; i++) {
    targetCount[target[i]] = (targetCount[target[i]] || 0) + 1;
}

let result = Infinity;

for (let char in targetCount) {
    if (!sCount[char]) {
        result = 0;
        break;
    }
    result = Math.min(result, Math.floor(sCount[char] / targetCount[char]));
}

console.log(result);
