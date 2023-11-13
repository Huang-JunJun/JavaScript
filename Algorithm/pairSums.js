// const pairSums = (nums, target) => {
// 	const arr = [];

// 	for (let i = 0; i < nums.length; i++) {
// 		for (let j = i + 1; j < nums.length; j++) {
// 			if (nums[i] + nums[j] === target) {
// 				arr.push([nums[i], nums[j]]);
// 				nums.splice(i, 1);
// 				nums.splice(j - 1, 1);
// 				i--;

// 				break;
// 			}
// 		}
// 	}

// 	return arr;
// };

const pairSums = (nums, target) => {
	if (nums.length === 0) return [];

	const list = nums.sort((a, b) => a - b);
	const arr = [];
	console.log(list);
	let i = 0;
	let j = list.length - 1;

	while (i !== j && i < j) {
		console.log('i', i);
		console.log('j', j);
		if (list[i] + list[j] === target) {
			arr.push([list[i], list[j]]);
			i++;
			j--;
		} else if (list[i] + list[j] < target) {
			i++;
		} else if (list[i] + list[j] > target) {
			j--;
		}
	}

	return arr;
};

console.log(pairSums([5, 6, 5, 6], 11));
