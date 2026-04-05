//Maximum Number of Pairs in Array

let arr = [1, 2, 3, 4];
let pairs = 0;

for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    if(i===j){
      continue;
    }
    pairs++;
  }
}

console.log(pairs);