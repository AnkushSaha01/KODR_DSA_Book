const prompt = require("prompt-sync")();

//Strong number using methods.

function factorial(n){
  if(n === 0 || n === 1){
    return 1;
  }
  return n * factorial(n-1);
}

function isStrong(num){
  let sum = 0;
  let temp = num;
  while(temp > 0){
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
  }
  return sum === num;
}

let num = Number(prompt("Enter a number: "));
if(isStrong(num)){
  console.log("Strong number");
} else {
  console.log("Not a strong number");
}
