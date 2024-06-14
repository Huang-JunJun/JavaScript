const countSeniors = (details) => {
	let num = 0;

	details.forEach((item) => {
		// 直接进行数值的比较要比字符串更高效
		const age = parseInt(item.slice(11, 13), 10);
		console.log(age);
		if (age > 60) num++;
	});

	return num;
};

// 示例 1
const details1 = ['7868190130M7522', '5303914400F9211', '9273338290F4010'];
// 示例 2
const details2 = ['1313579440F2036', '2921522980M5644'];

// 测量 countSeniors 函数的执行时间
console.time('countSeniors Execution Time');
console.log(countSeniors(details1)); // 输出: 2
console.log(countSeniors(details2)); // 输出: 0
console.timeEnd('countSeniors Execution Time');
