//Sort First half in Ascending and Second half in descending order in an array

let arr = [1, 2, 3, 4, 5, 6];

let firstHalf = arr.slice(0, arr.length / 2);
let secondHalf = arr.slice(arr.length / 2);

firstHalf.sort((a, b) => a - b);
secondHalf.sort((a, b) => b - a);

console.log([...firstHalf, ...secondHalf]);
