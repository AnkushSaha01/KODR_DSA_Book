const prompt = require("prompt-sync")();

//Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 100, 145, 20];
let max = arr[0];
let secondMax = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        secondMax = max;
        max = arr[i];
    } else if (arr[i] > secondMax && arr[i] < max) {
        secondMax = arr[i];
    }
}
console.log("Second greatest element: ", secondMax, "Max one is: ", max);