//Find Resultant Array After Removing Anagrams


let words = ["abba","baba","bbaa", "cd", "dc"];

function removeAnagrams(words){
    let result = [];
    for(let i = 0; i < words.length; i++){
        let isAnagramBool = false;
        for(let j = 0; j < result.length; j++){
            if(isAnagram(words[i], result[j])){
                isAnagramBool = true;
                break;
            }
        }
        if(!isAnagramBool){
            result.push(words[i]);
        }
    }
    return result;
}

function isAnagram(word1, word2){
    if(word1.length != word2.length){
        return false;
    }

    let frq1 = {};
    let frq2 = {};
    for(let i = 0; i < word1.length; i++){
        frq1[word1[i]] = (frq1[word1[i]] || 0) + 1;
        frq2[word2[i]] = (frq2[word2[i]] || 0) + 1;
    }
    for(let key in frq1){
        if(frq1[key] != frq2[key]){
            return false;
        }
    }
    return true;
}

console.log(removeAnagrams(words));
