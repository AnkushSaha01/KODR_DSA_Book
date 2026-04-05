//Count Equal and Divisible Pairs in an Array

let arr = [1, 2, 3, 2, 5, 1];
let eqCount = 0;
let divCount = 0;

for(let i = 0; i < arr.length; i++){
  for(let j = 0; j < arr.length; j++){
    if(i===j){
      continue
    }
    if(arr[i]===arr[j]){
      eqCount++;
    }
    if((i * j) % arr[i] === 0 || (i * j) % arr[j] === 0){
      divCount++;
    }
  }
}

console.log("Equal Pairs: ", eqCount);
console.log("Divisible Pairs: ", divCount);