
var removeDuplicates = function(nums) {
    const temp = []
    let index = 0;
    for(let a = 0; a < nums.length ; a ++){
        let isDuplicate = false;
        for(let b = 0; b < a; b++){
            if(nums[a] === temp[b]){
                isDuplicate = true;
                break;
            }
        }
        if(!isDuplicate){
            temp.push(nums[a]);
            nums[index] = nums[a];
            index ++;
        }
    }
    return index;
};

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));