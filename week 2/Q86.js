const prompt = require("prompt-sync")();

//Find Greatest Common Divisor of Array

let arr = [2,3,5,4,10,11]

let min = Math.min(...arr)
let max = Math.max(...arr)

for(let i = min; i >= 1; i--){
  if(max % i === 0 && min % i === 0){
    console.log(i)
    break;
  }
}

