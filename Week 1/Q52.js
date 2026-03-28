const prompt = require("prompt-sync")();

//V Pattern - Min Height = 3
let num = 3;
let str = "";
for (let i = 1; i <= num; i++) {
    for (let j = 1; j <= i; j++) {
        if(i===j){
          str += "*";
        }
        else{
          str += " ";
        }
    }
    for (let k = 1; k <= num; k++) {
      // str += "*";
        if(k === num+1-i){
          str += "*";
        }
        else{
          str += " ";
        }
    }
    console.log(str);
}