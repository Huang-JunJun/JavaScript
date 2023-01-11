const singleNumber = (nums) => {
  if(nums.length % 2 === 0) return;
  let ans = null

  for (let i = 0; i < nums.length; i++) {
    ans = ans ^ nums[i]
  }

  return ans
}

const nums = [1,2,2,1,4,6,4]

console.log(singleNumber(nums));