//Make Array Zero by Subtracting Equal Amounts

let nums = [1, 5, 0, 3, 5, 4];

function minimumOperations(nums) {
  const uniqueNumbers = new Set();

  for (let num of nums) {
    if (num > 0) {
      uniqueNumbers.add(num);
    }
  }

  return uniqueNumbers.size;
}

console.log(minimumOperations(nums));
