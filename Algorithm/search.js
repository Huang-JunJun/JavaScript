const search = (nums, target) => {
  let mid = Math.ceil(nums.length / 2)
  let l = 0
  let r = nums.length - 1

  while(nums[mid] !== target){
    if(nums[mid] > target){
      l = 0
      r = mid-1
    } else {
      l = mid
      r = nums.length - 1
    }
    mid = Math.ceil(r-l / 2)
    if(r-l === 1 && nums[mid] !== target) {
      mid = -1
      break
    }
  }

  return mid
}

let nums = [2,5]
const target = 1
nums = nums.slice(0,nums.length)
console.log(search(nums, target));
console.log(nums);