const maxArea = (height) => {
  let max = 0
  // 遇到小的就去除

  while(height.length > 0) {
    let l = 0
    let r = height.length - 1
    let sum = 0
    if(height[l] < height[r]){
      sum = height[l]*(height.length-1)
      height.shift()
    } else {
      sum = height[r]*(height.length-1)
      height.pop()
    }

    if(sum > max){
      max = sum
    }
  }

  return max
}

const height = [1,8,6,2,5,4,8,3,7]

console.log(maxArea([1,1]));