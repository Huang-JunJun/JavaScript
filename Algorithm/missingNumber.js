/**
 * @param {number[]} nums
 * @return {number}
 * 
 * 数组nums包含从0到n的所有整数，但其中缺了一个。请编写代码找出那个缺失的整数。你有办法在O(n)时间内完成吗？
 * 先对数组进行排序，然后再前面的数字减后面的数字如果不等于1 缺失的数字就为前面的数字+1
 */
// 暴力法
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

// 异或运算法
const missingNumber1 = (nums) => {
  let ret = 0
  for (let i = 0; i < nums.length; i++) {
    ret ^= nums[i]
    console.log(ret);
  }

  return ret
}

const nums = [9,6,4,2,3,5,7,0,1]

console.log(missingNumber1(nums));
