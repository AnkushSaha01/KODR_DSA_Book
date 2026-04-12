//Sort Even and Odd Indices Independently

let nums = [4, 1, 2, 3]
let even = []
let odd = []

for(let i = 0; i<nums.length; i++){
  if(i % 2 === 0){
    even.push(nums[i])
  }else{
    odd.push(nums[i])
  }
}

even.sort()
odd.sort()

let result = []

for(let i = 0; i<nums.length; i++){
  if(i % 2 === 0){
    result.push(even.shift())
  }else{
    result.push(odd.pop())
  }
}

console.log(result)
