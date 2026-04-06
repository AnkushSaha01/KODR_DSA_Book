//Smallest Index With Equal Value

let nums = [4, 3, 2, 1];

for (let i = 0; i < nums.length; i++) {
  if (i % 10 === nums[i]) {
    console.log(i);
    break;
  }
}
