const prompt  = require("prompt-sync")();

//Linear Search an array - If element found print the index, else -1

let arr = [1, 2, 3, 4, 5];
let search = Number(prompt("Enter the element to search: "));

function linearSearch(arr, search) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === search) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, search));
