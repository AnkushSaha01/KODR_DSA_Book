const prompt = require("prompt-sync")();

//Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)

let arr = [1, 2, 3, 7, 5];
let target = Number(prompt("Enter a target value: "));

function calSubArr(arr, target) {
  let count = 0;
  for (let j = 0; j < arr.length; j++) {
    let sum = 0;
    for (let i = j; i < arr.length; i++) {
      sum += arr[i];
      if (sum === target) {
        count = count + 1;
        break;
      } else if (sum > target) {
        break;
      }
    }
  }
  return count;
}

let count = calSubArr(arr, target);
console.log(count);