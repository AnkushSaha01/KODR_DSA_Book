//Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

const prompt = require("prompt-sync")();

let str = prompt("Enter a string: ");

let toggledStr = "";

for (let i = 0; i < str.length; i++) {
    if (str[i] >= 'a' && str[i] <= 'z') {
        toggledStr += str[i].toUpperCase();
    } else if (str[i] >= 'A' && str[i] <= 'Z') {
        toggledStr += str[i].toLowerCase();
    } else {
        toggledStr += str[i];
    }
}

console.log(toggledStr);
