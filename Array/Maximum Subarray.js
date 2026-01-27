/**
 * Problem: Maximum Subarray
 * Given an integer array `nums`, find the subarray with the largest sum, and return its sum.
 * 
 * Output: Integer (sum of the maximum subarray)
 * 
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let currentSum = 0;
    let maxSum = 0;
    for(let i = 0; i < nums.length; i++){
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1]));