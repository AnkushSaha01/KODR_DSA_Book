const prompt = require("prompt-sync")();

//Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let n = Number(prompt("Enter the size of the array: "));
let arr = [];
for (let i = 0; i < n; i++) {
    arr.push(Number(prompt("Enter the element: ")));
}
let reverseArr = [];
for (let i = n - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
}
console.log(reverseArr);