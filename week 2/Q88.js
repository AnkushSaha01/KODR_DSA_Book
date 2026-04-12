//Minimum Sum of Four Digit Number After Splitting Digits

let num = 2932
let arr = num.toString().split('').sort()

let num1 = arr[0] + arr[2]
let num2 = arr[1] + arr[3]

let sum = Number(num1) + Number(num2)

console.log("1st num " + num1 + " 2nd number " +num2 + " sum " +sum)
