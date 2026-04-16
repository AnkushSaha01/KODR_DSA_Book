//Maximum Number of Words Found in Sentences

let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]


let maxWords = 0

for (let i = 0; i < sentences.length; i++) {
    let words = sentences[i].split(" ")
    if (words.length > maxWords) {
        maxWords = words.length
    }
}

console.log(maxWords)