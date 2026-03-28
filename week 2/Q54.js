const prompt = require("prompt-sync")();

//Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let n = Number(prompt("Enter the size of the array: "));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Enter the element: ")));
}
let sum = 0;
for (let i = 0; i < n; i++) {
    sum += arr[i];
} 
let avg = sum / n;
console.log("Sum: ", sum);
console.log("Average: ", avg);