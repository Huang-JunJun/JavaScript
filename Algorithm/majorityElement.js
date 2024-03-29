/**
 * @param {number[]} nums
 * @return {number}
 * 数组中占比超过一半的元素称之为主要元素。给你一个 整数 数组，找出其中的主要元素。若没有，返回 -1 。请设计时间复杂度为 O(N) 、空间复杂度为 O(1) 的解决方案。
 */
 var majorityElement = function(nums) {
  let candidate = null
  let count = 0

  for (let i = 0; i < nums.length; i++) {
    if(count === 0) {
      candidate = nums[i]
    }

    if(nums[i] === candidate){
      count++
    } else {
      count--
    }
  }

  return candidate

    //官方题解 摩尔投票算法 
//     Boyer-Moore 投票算法的基本思想是：在每一轮投票过程中，从数组中删除两个不同的元素，直到投票过程无法继续，此时数组为空或者数组中剩下的元素都相等。
// 如果数组为空，则数组中不存在主要元素；
// 如果数组中剩下的元素都相等，则数组中剩下的元素可能为主要元素。
// Boyer-Moore 投票算法的步骤如下：
// 维护一个候选主要元素 candidate 和候选主要元素的出现次数 count，初始时 candidate 为任意值，count=0；
// 遍历数组 nums 中的所有元素，遍历到元素 xx 时，进行如下操作：
// 如果 count=0，则将 x 的值赋给 candidate，否则不更新 candidate 的值；
// 如果 x=x=candidate，则将 count 加 1，否则将 count 减 1。
// 遍历结束之后，如果数组 nums 中存在主要元素，则 candidate 即为主要元素，否则 candidate 可能为数组中的任意一个元素。
// 由于不一定存在主要元素，因此需要第二次遍历数组，验证 candidate 是否为主要元素。第二次遍历时，统计 candidate 在数组中的出现次数，如果出现次数大于数组长度的一半，则 candidate 是主要元素，返回 candidate，否则数组中不存在主要元素，返回 -1。
// 为什么当数组中存在主要元素时，Boyer-Moore 投票算法可以确保得到主要元素？
// 在 Boyer-Moore 投票算法中，遇到相同的数则将 count 加 1，遇到不同的数则将 count 减 1。根据主要元素的定义，主要元素的出现次数大于其他元素的出现次数之和，因此在遍历过程中，主要元素和其他元素两两抵消，最后一定剩下至少一个主要元素，此时 candidate 为主要元素，且 count≥1。
   
};