//Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix. (Example - Input: words = ["pay", "attention", "practice", "attend"], prefix = "at")

let arr = ["pay", "attention", "practice", "attend"]
let prefix = "at"

let count = 0

for (let i = 0; i < arr.length; i++) {
    if (arr[i].startsWith(prefix)) {
        count++
    }
}

console.log(count)