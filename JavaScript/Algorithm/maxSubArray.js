/* 
    连续数列

    给定一个整数数组，找出总和最大的连续数列，并返回总和。

示例：

输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
function maxSubArray(nums) {
    // 暴力解法 定义两个数，一个返回最后的结果，一个用来记录数据
    // 每当循环的区间大于result 就使result = count
    let result = 0
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count = 0
        for (let j = i; j < nums.length; j++) {
            count = count + nums[i]
            result = count > result ? count : result
        }
    }

    return result
}
let nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums));