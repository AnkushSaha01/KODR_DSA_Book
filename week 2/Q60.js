const prompt = require("prompt-sync")();

//Array left rotation by K elements

let arr = [1, 2, 3, 4, 5];
let k = Number(prompt("Enter the number of rotations: "));


function reverse(array, start, end) {
  while(start < end) {  
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    start++;
    end--;
  }
}

function leftByK(arr, k) {
  k = k % arr.length; 

  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  reverse(arr, 0, arr.length - 1);
  
  console.log(arr);
}

leftByK(arr, k);
