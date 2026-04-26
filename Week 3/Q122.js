//Check if Number Has Equal Digit Count and Digit Value

let num = "1210";
let frq = {};

function check(num){
    for(let i = 0; i < num.length; i++){
        frq[num[i]] = (frq[num[i]] || 0) + 1;
    }
    for(let i = 0; i < num.length; i++){
        if((frq[i] || 0) != num[i]){
            return false;
        }
    }
    return true;
}       



console.log(check(num));
console.log(frq)