const isStraight = (nums) => {
    // 先排序
    nums = nums.sort((a, b) => a - b)

    let kingsCount = 0
    
    for (let i = 0; i + 1 < nums.length; i++) {
        if (nums[i] == 0) kingsCount++;
        else if (nums[i] == nums[i + 1]) return false;
    }
    
    return nums[4] - nums[kingsCount] < 5
}

const nums = [0,2,3,5,6]

console.log(isStraight(nums));