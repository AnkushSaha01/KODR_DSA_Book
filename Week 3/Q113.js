//Count Asterisks

let s = "l**|*des*|*is*";

let count = 0;

for (let i = 0; i < s.length; i++) {
    if (s[i] === "*") {
        count++;
    }
}

console.log(count);