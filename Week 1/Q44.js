const prompt = require("prompt-sync")();

//Project - Guess Game

const guess = Number(prompt("Guess the number between 1 and 10: "));
const randomNumber = Math.floor(Math.random() * 10) + 1;

if (guess === randomNumber) {
    console.log("You guessed the number!");
} else {
    console.log("You guessed wrong. The number was " + randomNumber);
}