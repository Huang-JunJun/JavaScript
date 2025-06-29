const change = (amount, coins) => {
	const dp = new Array(amount + 1).fill(0);
	dp[0] = 1; // 初始化总金额为0时，只有一种组合方式，即什么都不选

	for (const coin of coins) {
		for (let i = coin; i <= amount; i++) {
			console.log(coin, i);
			dp[i] = dp[i - coin] + dp[i];
			console.log(dp);
		}
	}

	// console.log(dp); // 输出 dp 数组

	return dp[amount];
};

console.log(change(5, [1, 2, 5]));
