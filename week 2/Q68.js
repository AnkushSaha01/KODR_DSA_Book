const prompt = require("prompt-sync")();

//Special number using methods. A number is said to be a special number if the sum of the first half of the number and the sum of the second half of the number is equal (Ex - 1230 is a special number because 1+2 = 3 and 3+0 = 3)

let num = Number(prompt("Enter a number: "));

let strNum = Math.abs(num).toString();

if (strNum.length % 2 !== 0) {
    console.log(`${num} is Not a Special Number (requires an even number of digits)`);
} else {
    let mid = strNum.length / 2;

    // Get the first and second half of the string
    let firstHalf = strNum.slice(0, mid);
    let secondHalf = strNum.slice(mid);

    // Apply methods: split into array of characters, then use reduce to calculate the sum
    let sum1 = firstHalf.split("").reduce((sum, digit) => sum + Number(digit), 0);
    let sum2 = secondHalf.split("").reduce((sum, digit) => sum + Number(digit), 0);

    // Compare sums
    if (sum1 === sum2) {
        console.log(`${num} is a Special Number because sum of ${firstHalf} (${sum1}) is equal to sum of ${secondHalf} (${sum2})`);
    } else {
        console.log(`${num} is Not a Special Number`);
    }
}
