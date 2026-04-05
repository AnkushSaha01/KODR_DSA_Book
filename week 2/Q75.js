//Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2)

let arr = [1, 2, 1, 2, 1, 3];
let leftSum = 0;
let rightSum = 0;

for(let i = 0; i < arr.length / 2; i++){
  leftSum += arr[i];
}

for(let i = arr.length / 2; i < arr.length; i++){
  rightSum += arr[i];
}

console.log(Math.abs(leftSum - rightSum));
