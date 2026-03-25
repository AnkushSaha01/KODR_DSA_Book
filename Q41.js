const prompt = require("prompt-sync")();

//Make a choice based calculator using do while

const num1 = Number(prompt("Enter the first number: "));
const num2 = Number(prompt("Enter the second number: "));

const choice = prompt("Enter your choice(+,-,/,*): ");
let result;
do {
    switch (choice) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        default:
            console.log("Invalid choice");
    }
} while (choice !== "+" && choice !== "-" && choice !== "*" && choice !== "/");
console.log(result);