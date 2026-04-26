//Check Whether Two Strings are Almost Equivalent

// Two strings word1 and word2 are considered to be almost equivalent if the 
// absolute difference in the number of occurrences of each letter in word1 
// and word2 is less than or equal to 3.
// Note that the strings may contain lowercase and uppercase English letters only.
// Return true if word1 and word2 are almost equivalent, and false otherwise.

let word1 = "abcdeef";
let word2 = "abaaacc";

function checkAlmostEquivalent(word1, word2){
    let frq1 = {};
    let frq2 = {};
    for(let i = 0; i < word1.length; i++){
        frq1[word1[i]] = (frq1[word1[i]] || 0) + 1;
    }
    for(let i = 0; i < word2.length; i++){
        frq2[word2[i]] = (frq2[word2[i]] || 0) + 1;
    }
    for(let key in frq1){
        if(Math.abs(frq1[key] - (frq2[key] || 0)) > 3){
            return false;
        }
    }
    for(let key in frq2){
        if(Math.abs(frq2[key] - (frq1[key] || 0)) > 3){
            return false;
        }
    }
    return true;
}

console.log(checkAlmostEquivalent(word1, word2));
