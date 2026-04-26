//Remove Digit From Number to Maximize Result

let num = "133235";
let digit = "3";
function removeDigit(num) {
  let max = "";
  for (let i = 0; i < num.length; i++) {
    if (num[i] == digit) {
      let temp = num.slice(0, i) + num.slice(i + 1);
      if (temp > max) {
        max = temp;
      }
    }
  }
  return max;
}

console.log(removeDigit(num));
