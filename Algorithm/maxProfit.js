const maxProfit = (prices) => {
  let maxProfit = 0

  for (let i = 0; i < prices.length-1; i++) {
    let tempProfit = 0
    for (let j = i + 1; j < prices.length; j++) {
      tempProfit = tempProfit + prices[j] - prices[j-1]
      if(tempProfit > maxProfit){
        maxProfit = tempProfit
      }
    }
  }

  return maxProfit
}

console.log(maxProfit([8, 9, 2, 5, 4, 7, 1]));

// 二刷 2023-04-27

const maxPro = function (prices) {
  // 总的利润
  let maxProfit = 0

  for (let i = 0; i < prices.length-1; i++) {
    let tempProfit = 0
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > 0) {
        tempProfit = Math.max(prices[j] - prices[i], tempProfit)
      }
    }
    maxProfit = tempProfit + maxProfit
    console.log(i ,tempProfit)
  }

  return maxProfit
};

console.log(maxPro([7,1,5,3,6,4]));
