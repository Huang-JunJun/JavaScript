const twoTuples = (m, n, a, b) => {
	// 新建一个Map
	const Amap = new Map();
	const Bmap = new Map();
	let count = 0;

	a.forEach((element) => {
		if (Amap.has(element)) {
			// 如果Amap中已经有了这个元素，更新对应的值
			Amap.set(element, Amap.get(element) + 1);
		} else {
			// 如果Amap中没有这个元素，设置初始值为1
			Amap.set(element, 1);
		}
	});

	b.forEach((element) => {
		if (Bmap.has(element)) {
			// 如果Bmap中已经有了这个元素，更新对应的值
			Bmap.set(element, Bmap.get(element) + 1);
		} else {
			// 如果Bmap中没有这个元素，设置初始值为1
			Bmap.set(element, 1);
		}
	});

	Bmap.forEach((value, key) => {
		if (Amap.has(key)) {
			// 如果Amap中有这个元素，增加计数
			count = Amap.get(key) * Bmap.get(key) + count;
		}
	});

	return count;
};
const m = 3;
const n = 2;
const a = [1, 2, 3, 4, 5];
const b = [1, 2, 3, 4];
// twoTuples(m, n, a, b);
console.log(twoTuples(m, n, a, b));
