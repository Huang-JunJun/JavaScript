const selectSort = (nums) => {

    for (let i = 0; i < nums.length - 1; i++) {
        let tmp = nums[i]
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[i]) {
                nums[i] = nums[j]
                nums[j] = tmp
                tmp = nums[i]
            }
        }
    }

    return nums
}

const nums = [5, 4, 8, 7, 6]

console.log(selectSort(nums));