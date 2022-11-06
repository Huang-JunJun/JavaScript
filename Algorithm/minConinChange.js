// 最少硬币找零问题
function coinChange(coins, amount){
  const memo = new Map()
  memo.set(0, 0)
  const coinChangeHelper = (coins, amount, memo) => {
    if (memo.has(amount)) {
      return memo.get(amount)
    }
    let minCount = Infinity
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i]
      if (coin > amount) {
        continue
      }
      const res = amount - coin
      const resMinCount = coinChangeHelper(coins, res, memo)
      if (resMinCount === -1) {
        continue
      }
      minCount = Math.min(minCount, resMinCount + 1)
    }
    if (minCount === Infinity) {
      memo.set(amount, -1)
      return -1
    }
    memo.set(amount, minCount)
    return minCount
  }
  return coinChangeHelper(coins, amount, memo)
};

console.log(coinChange([1,5,10,25], 36));