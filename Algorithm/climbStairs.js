/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = (n) => {
  // 递归超时
  // if(n === 1) {
  //   return 1
  // }
  // if(n === 2) {
  //   return 2
  // }

  // return climbStairs(n-1) + climbStairs(n-2)
  let q = 0
  let p = 0
  let r = 1
  for (let i = 0; i < n; i++) {
    p = q
    q = r
    r = q + p
  }
  
  return r
};

console.log(climbStairs(10));