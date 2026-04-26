//Largest 3-Same-Digit Number in String

let s = "6777133999";
function largestGoodInteger(s){
    let max = "";
    for(let i = 0; i < s.length - 2; i++){
        if(s[i] == s[i+1] && s[i] == s[i+2]){
            let temp = s.slice(i, i+3);
            if(temp > max){
                max = temp;
            }
        }
    }
    return max;
}

console.log("The largest good integer in", s, "is", largestGoodInteger(s));