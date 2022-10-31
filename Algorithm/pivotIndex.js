/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
  const midIndex = Math.round(nums.length / 2)
  let leftSum = 0
  let rightSum = 0

  for (let i = 0; i < nums.length; i++) {
    if (i < midIndex) {
      leftSum = leftSum + nums[i]
    } else if (i > midIndex) {
      rightSum = rightSum + nums[i]
    }
  }

  if (leftSum < rightSum) {
    let index = midIndex + 1

    for (let i = 0; i < nums.length; i++) {
      if (i < index) {
        leftSum = leftSum + nums[i]
      } else if (i > index) {
        rightSum = rightSum + nums[i]
      }
    }
  } else if (leftSum > rightSum) {
    
  } else {
    return midIndex
  }
};