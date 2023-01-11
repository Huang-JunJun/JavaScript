let numWays = function(n) {
  // 补全代码
  if(n === 1){
    return 1
  }
  if(n === 2){
    return 2
  }

  return numWays(n-1) + numWays(n-2)
}

const n = 7

console.log(numWays(n));