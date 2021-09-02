/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 *  和为s的两个数字
 * 输入一个递增排序的数组和一个数字s，在数组中查找两个数，使得它们的和正好是s。如果有多对数字的和等于s，则输出任意一对即可。
    示例 1：

    输入：nums = [2,7,11,15], target = 9
    输出：[2,7] 或者 [7,2]
    示例 2：

    输入：nums = [10,26,30,31,47,60], target = 40
    输出：[10,30] 或者 [30,10]
    思路1：使用双层嵌套循环可以解出，但是会有过多的计算冗余。
    思路2：因为数组为递增数组，在单个元素大于target的时候就结束循环；在比较元素与被比较元素大于target的时候就进入下一次循环 减少计算成本
 */
 var twoSum = function(nums, target) {
    nums.forEach((item,index) => {
        nums.filter()
    })
};