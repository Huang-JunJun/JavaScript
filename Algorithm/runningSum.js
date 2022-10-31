/**
 * @param {number[]} nums
 * @return {number[]}
 */

const runningSum = (nums) => {
  const newArr = []

  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = 0; j < i + 1; j++) {
      sum = nums[j] + sum
    }
    newArr.push(sum)
  }

  return newArr
};

const arr = [1,2,3,4]

const nums = runningSum(arr)

console.log(nums);