var missingNumber = function(nums) {
    for (let i =0; i<nums.length; i++){
        if(!nums.includes(i)) return i
    }
    return nums.length
};
console.log(missingNumber([0,2,3]))   //1
console.log(missingNumber([0,1,2]))   //3