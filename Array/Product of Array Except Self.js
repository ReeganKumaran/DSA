/**
 * Problem: Product of Array Except Self
 * Given an integer array `nums`, return an array `answer` such that `answer[i]` is equal to the product of all the elements of `nums` except `nums[i]`.
 * The product of any prefix or suffix of `nums` is guaranteed to fit in a 32-bit integer.
 * You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 * Output: Array of integers
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const answer = [];
    let temp = 1; 
    for(let i = 0; i < nums.length; i++){
        answer[i] = temp;
        temp *= nums[i];
    }
    temp = 1
    for(let i = answer.length - 1; i >= 0; i--){
        answer[i] *= temp;
        temp *= nums[i];
    }
    return answer;

};
productExceptSelf([5,3,6,7])