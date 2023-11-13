const findTheLongestBalancedSubstring = (s) => {
	const arr = s.split('');
	let list = [];
	let max = 0;
	let sum = 0;
	let flag = true;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === '0') {
			if (flag) {
				list.push(arr[i]);
			} else {
				list = [];
				list.push(arr[i]);
				flag = true;
			}
			sum = 0;
		} else {
			if (list.length > 0) {
				flag = false;
				list.pop();
				sum++;
				max = sum * 2 > max ? sum * 2 : max;
			}
		}
	}

	return max;
};

console.log(findTheLongestBalancedSubstring('001011'));
