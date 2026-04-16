//Check distances Between same letters

const prompt = require("prompt-sync")();

let s = prompt("Enter a string: ");

let distances = {};

for (let i = 0; i < s.length; i++) {
    if (distances[s[i]]) {
        distances[s[i]].push(i);
    } else {
        distances[s[i]] = [i];
    }
}

let result = [];

for (let char in distances) {
    if (distances[char].length > 1) {
        let minDistance = Infinity;
        for (let i = 0; i < distances[char].length - 1; i++) {
            minDistance = Math.min(minDistance, distances[char][i + 1] - distances[char][i]);
        }
        result.push(minDistance);
    }
}

console.log(result);