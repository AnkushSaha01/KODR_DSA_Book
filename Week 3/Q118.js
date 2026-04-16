//Greatest English Letter in Upper and Lower Case

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
