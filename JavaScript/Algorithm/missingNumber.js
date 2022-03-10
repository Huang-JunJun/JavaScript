/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
 * 先对数组进行排序，然后再前面的数字减后面的数字如果不等于1 缺失的数字就为前面的数字+1
 */
var missingNumber = function(nums) {
    // sort()函数是根据unicode编码来排序的，所以具有不稳定性
    nums.sort(function(a,b){return a-b})
    nums.length = nums.length + 1

    if(nums[0] != 0) {
        return 0
    }

    for(let i=0; i < nums.length - 1; i++) {
        if(nums[i+1] != nums[i] + 1) {
            return nums[i]+1
        }
    }
};

let nums = [45,35,38,13,12,23,48,15,44,21,43,26,6,37,1,19,22,3,11,32,4,16,28,49,29,36,33,8,9,39,46,17,41,7,2,5,27,20,40,34,30,25,47,0,31,42,24,10,14]

let n = missingNumber(nums)
console.log(n);