//Count Hills and Valleys in an Array

let nums = [2, 4, 1, 1, 6, 5];
let arr = [];

for(let i=0; i<nums.length; i++){
  if(nums[i] === nums[i+1]){
    continue;
  }
  arr.push(nums[i]);
}

for(let i = 1; i < arr.length - 1; i++){
  if(arr[i] > arr[i-1] && arr[i] > arr[i+1]){
    console.log("Hill");
  }
  if(arr[i] < arr[i-1] && arr[i] < arr[i+1]){
    console.log("Valley");
  }
}

