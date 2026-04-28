//Given an array of integers, you need to traverse the collection and pick out the elements that appear exactly once. This tests your ability to handle frequency counting and efficiently manage data structures like HashMaps or Sets.

let nums = [4, 5, 1, 2, 1, 4, 8];

function findSingleNumber(nums){
    let frq = {};
    for(let i = 0; i < nums.length; i++){
        frq[nums[i]] = (frq[nums[i]] || 0) + 1;
    }
    let result = [];
    for(let key in frq){
        if(frq[key] == 1){
            result.push(Number(key));
        }
    }
    return result;
}

console.log(findSingleNumber(nums));