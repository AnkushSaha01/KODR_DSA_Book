//Check if Numbers Are Ascending in a Sentence

let s = "4 8 15 16 23 42";

function areAscending(s){
    let nums = s.split(" ").filter(Boolean).map(Number);
    for(let i = 0; i < nums.length - 1; i++){
        if(nums[i] >= nums[i+1]){
            return false;
        }
    }
    return true;
}

console.log(areAscending(s));