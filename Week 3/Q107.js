//Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)

let str = "Hello bhai kaise ho";

let words = str.split(" ");

for (let i = 0; i < words.length; i++) {
  console.log(words[i][0].toUpperCase() + words[i].slice(1));
}
