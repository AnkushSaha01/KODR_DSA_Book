//Find sum of minimum absolute difference of the given array

let arr = [10, 2, 13, 4];
let sum = 0;

for(let i = 0; i < arr.length; i++){
  let subArr = []
  for(let j = 0; j < arr.length; j++){
    if(i===j){
      continue;
    }
    subArr.push( Math.abs(arr[i] - arr[j]));
  }
  sum += Math.min(...subArr);
}

console.log(sum);