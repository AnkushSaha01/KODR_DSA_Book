//Calculate Digit Sum of a String

// You are given a string s consisting of digits and an integer k. Your task is to perform the following operation repeatedly until the length of the string is less than or equal to k:

// Divide the string into groups of size k. The last group may be shorter than k.

// Sum the digits of each group.

// Replace each group with its sum (converted back into a string).

// Merge these new strings together to form a new version of s.

let s = "11111222223";
let k = 3;

function digitSum(s, k) {
  while (s.length > k) {
    let temp = "";
    for (let i = 0; i < s.length; i += k) {
      let group = s.slice(i, i + k);
      let sum = 0;
      for (let j = 0; j < group.length; j++) {
        sum += parseInt(group[j]);
      }
      temp += sum.toString();
    }
    s = temp;
  }
  return s;
}

console.log(digitSum(s, k));
