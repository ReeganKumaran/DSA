/**
 * Problem: Contains Duplicate
 * Given an integer array `nums`, return `true` if any value appears at least twice in the array,
 * and return `false` if every element is distinct.
 * 
 * Output: Boolean (`true` if duplicate exists, `false` otherwise)
 * 
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = Object.create(null)
    for(let i = 0; i < nums.length; i++){
        if (typeof nums[i] !== "number") throw Error(`In a array ${nums[i]} is not a number`);
        if(seen[nums[i]] != true){
            seen[nums[i]] = true
        }
        else return true
    }
    // console.log(seen)
    return false
};
console.log(containsDuplicate([1,2,4,5,6,1, "1"]));