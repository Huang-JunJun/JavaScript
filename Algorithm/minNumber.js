const minNumber = (nums) => {
	// nums.forEach((item, index) => {
	// 	nums[index] = String(item);
	// });
	// x+y > y+x x大于y
	// x+y < y+x x小于y
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
			if (
				String(nums[i]) + String(nums[j]) >
				String(nums[j]) + String(nums[i])
			) {
				const temp = nums[j];
				nums[j] = nums[i];
				nums[i] = temp;
			}
		}
	}

	return nums.join('');
};

const nums = [3, 30, 34, 5, 9];

console.log(minNumber(nums));
