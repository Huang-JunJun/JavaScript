// 给定一个  无重复元素 的 有序 整数数组 nums 。

// 返回 恰好覆盖数组中所有数字 的 最小有序 区间范围列表 。也就是说，nums 的每个元素都恰好被某个区间范围所覆盖，并且不存在属于某个范围但不属于 nums 的数字 x 。
const summaryRanges = (nums) => {
	// 暴力法 n+1项 != n+1
	const arr = [];
	let pre = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i + 1] !== nums[i] + 1) {
			if (pre === i) {
				arr.push(nums[i]);
			} else {
				arr.push(`${nums[pre]}->${nums[i]}`);
			}
			pre = i + 1;
		}
	}

	return arr.map((item) => `${item}`);
};
// 双指针法
const summaryRanges = (nums) => {
	const res = [];
	let left = 0,
		right = 0;
	for (let i = 1; i <= nums.length; i++) {
		if (nums[i] !== nums[right] + 1) {
			if (left === right) {
				res.push(`${nums[left]}`);
			} else {
				res.push(`${nums[left]}->${nums[right]}`);
			}
			left = right = i;
		} else {
			right++;
		}
	}
	if (left < nums.length) {
		if (left === right) {
			res.push(`${nums[left]}`);
		} else {
			res.push(`${nums[left]}->${nums[right]}`);
		}
	}
	return res;
};
const nums = [0, 2, 3, 4, 6, 8, 9];
console.log(summaryRanges(nums));
