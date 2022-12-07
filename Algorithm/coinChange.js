const coinChange = (coins, amount) => {
  let dp = new Array(amount+1).fill(Infinity)
  dp[0] = 0

  for (const num of coins) {
    console.log(num);
    for (let j = num; j <= amount; j++) {
      dp[j] = Math.min(dp[j],dp[j-num]+1)
    }
    console.log(dp);
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}

const coins = [1,5,10]

console.log(coinChange(coins, 15));