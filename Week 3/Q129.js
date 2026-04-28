//Given a binary array (an array containing only 0s and 1s), your task is to find the maximum number of consecutive 1s in the array. Essentially, you are looking for the longest unbroken chain of ones.

let nums = [1, 1, 0, 1, 1, 1];

function findMaxConsecutiveOnes(nums){
    let max = 0;
    let count = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i] === 1){
            count++;
        }else{
            count = 0;
        }
        if(count > max){
            max = count;
        }
    }
    return max;
}

console.log(findMaxConsecutiveOnes(nums));