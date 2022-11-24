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

console.log(maxProfit([8,9,2,5,4,7,1]));