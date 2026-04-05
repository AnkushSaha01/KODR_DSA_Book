//Divide Array Into Equal Pairs

let arr = [1, 2, 3, 4];
let subArrs = [];

for(let i = 0; i < arr.length; i++){
  for(let j = i+1; j < arr.length; j++){
    let subArr = [];
    subArr.push(arr[i], arr[j]);
    subArrs.push(subArr);
  }
}

for(let i = 0; i < subArrs.length; i++){
  for(let j =0; j < subArrs.length; j++){
    if(i===j){
      continue;
    }
    let iSum = subArrs[i].reduce((a, b) => a + b);
    let jSum = subArrs[j].reduce((a, b) => a + b);
    if(iSum === jSum){
      console.log(subArrs[i], subArrs[j]);
    }
  }
}

