/* 
    连续数列

    给定一个整数数组，找出总和最大的连续数列，并返回总和。

示例：

输入： [-2,1,-3,4,-1,2,1,-5,4]
输出： 6
解释： 连续子数组 [4,-1,2,1] 的和最大，为 6。
*/
function maxSubArray(nums) {
  let pre = 0, maxAns = nums[0];
    nums.forEach((x) => {
      console.log('pre', pre);
      console.log('maxAns', maxAns);
      pre = Math.max(pre + x, x);
      maxAns = Math.max(maxAns, pre);
    });

  return maxAns;
}
let nums = [-2,1,-3,4,-1,2,1,-5,4]

console.log(maxSubArray(nums));