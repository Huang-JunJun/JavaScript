const cuttingRope = (n) => {
  const dp = new Array(n+1).fill(0)

  dp[2] = 1

  for (let i = 2; i < n; i++) {
    for (let j = 1; j < i; j++) {
      dp[i] = Math.max(dp[i], (i-j)*j, dp[i-j]*j)
    }
  }

  return dp[n]
}