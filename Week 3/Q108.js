//capitalize the first & last character of each word in the sentence and print the new sentence (Ex - Hello bhai Kaise ho a, Output - HellO BhaI KaisE HO A)

let str = "Hello bhai Kaise ho a";

let words = str.split(" ");

let newWords = [];

for (let i = 0; i < words.length; i++) {
  if (words[i].length === 1) {
    newWords.push(words[i].toUpperCase());
  } else {
    newWords.push(words[i][0].toUpperCase() + words[i].slice(1, -1) + words[i][words[i].length - 1].toUpperCase());
  }
}

console.log(newWords.join(" "));