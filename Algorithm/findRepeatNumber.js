const findRepeatNumber = (nums) => {
    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) !== nums.lastIndexOf(nums[i])) {
            return nums[i]
        }
    }

    return null
}

console.log(findRepeatNumber([2, 3, 1, 0, 2, 5, 3]));