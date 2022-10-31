const selectSort = (nums) => {

  for (let i = 0; i < nums.length - 1; i++) {
    let curMinIndex = i
    for (let j = i+1; j < nums.length; j++){
      if(nums[j] < nums[curMinIndex]){
        curMinIndex = j
      }
    }
    let tmp = nums[i]
    nums[i] = nums[curMinIndex]
    nums[curMinIndex] = tmp
  }
  
  return nums
}

const nums = [5, 4, 8, 7, 6, 3]

console.log(selectSort(nums));