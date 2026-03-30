const prompt = require("prompt-sync")();

//Move all the negative elements on the left side and positive elements on the right side O(n).

const arr = [1, -2, 3, -4, 5];
let j = 0;

for(let i = 0; i < arr.length; i++){
  if(arr[i] < 0){
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j++;
  }
}

console.log(arr);