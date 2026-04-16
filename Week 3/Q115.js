//Check if All A's Appears Before All B's

let s = "abab";

let isValid = true;

for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === 'b' && s[i + 1] === 'a') {
        isValid = false;
        break;
    }
}

console.log(isValid);
