var singleNumber = function(nums) {
    if (nums.length===1) return nums[0]
    for (let i=1; i<nums.length; i++){
        if (!nums.slice(0, i).includes(nums[i]) && !nums.slice(i+1).includes(nums[i])) return nums[i]
    }
    return nums[0]
};
console.log(singleNumber([2,2,1]))    //1
console.log(singleNumber([4,1,2,1,2]))  //4