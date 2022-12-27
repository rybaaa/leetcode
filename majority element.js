var majorityElement = function (nums) {
    let counts = (nums.length + 1) / 2
    for (let i = 0; i < nums.length; i++) {
        let repeats = 0
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                repeats += 1
            }
            if (repeats >= counts) return nums[i]
        }
    }
};
console.log(majorityElement([3, 3, 2]))               //3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))   //2

//The majority element is the element that appears more than n/2 times.