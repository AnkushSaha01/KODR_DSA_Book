//You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').

let int = [1,2,3,4,5,6,7,8,9,10];
let char = ['a','b','c','a','b','c','a','b','c','a'];

let sumA = 0;
let sumB = 0;
let sumC = 0;

for(let i = 0; i < int.length; i++){
  if(char[i] === 'a'){
    sumA += int[i];
  }else if(char[i] === 'b'){
    sumB += int[i];
  }else if(char[i] === 'c'){
    sumC += int[i];
  }
}

console.log(Math.min(sumA + sumB, sumC));
