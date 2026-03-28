const prompt = require("prompt-sync")();

//Print \hello\" until user gives wrong input using do while"
let input;
do {
    input = prompt("Enter a value: ");
    console.log("hello");
} while (input === "hello");