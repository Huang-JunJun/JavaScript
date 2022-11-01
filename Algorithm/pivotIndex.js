/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  let midIndex = 0
  let leftSum = 0
  let rightSum = 0

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (j < midIndex) {
        leftSum = leftSum + nums[j]
      } else if (j > midIndex) {
        rightSum = rightSum + nums[j]
      }
    }
    
    if(leftSum === rightSum) {
      return midIndex
    } else {
      midIndex++
      leftSum = 0
      rightSum = 0
    }
  }

  return -1
};

const nums = [1,7,3,6,5,6]

console.log(pivotIndex(nums));