//Min Max Game - Array

let nums = [1, 3, 5, 2, 4, 8, 2, 2]

let newNums = new Array(nums.length / 2)

for(let i = 0; i<newNums.length; i++){
  if(i % 2 === 0){
    newNums[i] = Math.min(nums[2*i], nums[2*i+1])
  }else{
    newNums[i] = Math.max(nums[2*i], nums[2*i+1])
  }
}

console.log(newNums)