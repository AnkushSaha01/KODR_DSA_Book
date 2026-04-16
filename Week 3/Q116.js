//Strong Password Checker II
//A password is considered strong if it satisfies all of the following requirements:

// Length: It has at least 8 characters.

// Lowercase: It contains at least one lowercase English letter.

// Uppercase: It contains at least one uppercase English letter.

// Digit: It contains at least one digit.

// Special Character: It contains at least one special character. The special characters are: !@#$%^&*()-+.

// No Adjacent Duplicates: It does not contain two of the same character in adjacent positions (e.g., "aa" is not allowed, but "aba" is).

// Given a string password, return true if it is a strong password. Otherwise, return false.

const prompt = require("prompt-sync")();

let password = prompt("Enter a password: ");

let hasLowercase = false;
let hasUppercase = false;
let hasDigit = false;
let hasSpecialChar = false;
let hasAdjacentDuplicates = false;

for (let i = 0; i < password.length; i++) {
    if (password[i] >= "a" && password[i] <= "z") {
        hasLowercase = true;
    }
    if (password[i] >= "A" && password[i] <= "Z") {
        hasUppercase = true;
    }
    if (password[i] >= "0" && password[i] <= "9") {
        hasDigit = true;
    }
    if (password[i] === "!" || password[i] === "@" || password[i] === "#" || password[i] === "$" || password[i] === "%" || password[i] === "^" || password[i] === "&" || password[i] === "*" || password[i] === "(" || password[i] === ")" || password[i] === "-" || password[i] === "+") {
        hasSpecialChar = true;
    }
}

for (let i = 0; i < password.length - 1; i++) {
    if (password[i] === password[i + 1]) {
        hasAdjacentDuplicates = true;
        break;
    }
}

if (password.length >= 8 && hasLowercase && hasUppercase && hasDigit && hasSpecialChar && !hasAdjacentDuplicates) {
    if(hasAdjacentDuplicates){
        console.log("The password is not strong");
    }
    else{
        console.log("The password is strong");
    }
} else {
    console.log("The password is not strong");
}