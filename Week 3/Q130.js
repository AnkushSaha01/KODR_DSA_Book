//You are given two integer arrays, nums1 and nums2, each sorted in non-decreasing order. You are also given two integers, m and n, representing the number of actual elements in nums1 and nums2 respectively.The goal is to merge nums2 into nums1 as a single sorted array.The Catch: You must modify nums1 in-place. To accommodate this, nums1 has a total length of $m + n$, where the first $m$ elements denote the initial values and the rest are set to 0 (serving as empty placeholders).

let nums1 = [1, 2, 3, 0, 0, 0];
let nums2 = [2, 5, 6];
let m = 3;
let n = 3;

function merge(nums1, m, nums2, n){
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while(i >= 0 && j >= 0){
        if(nums1[i] > nums2[j]){
            nums1[k] = nums1[i];
            i--;
        }else{
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }
    while(j >= 0){
        nums1[k] = nums2[j];
        j--;
        k--;
    }
    return nums1;
}

console.log(merge(nums1, m, nums2, n));
