const compactObject = (obj) => {
	if (Array.isArray(obj)) {
		return obj
			.map((item) => compactObject(item)) // 递归处理数组中的每个元素
			.filter(Boolean); // 过滤掉假值
	} else if (obj !== null && typeof obj === 'object') {
		const newObj = {};
		for (const key in obj) {
			const value = compactObject(obj[key]); // 递归处理对象中的每个值
			if (Boolean(value)) {
				newObj[key] = value; // 只有当值为真时才添加到新对象中
			}
		}
		return newObj;
	} else {
		return obj; // 对于非对象和非数组的值，直接返回原值
	}
};

const obj = { a: null, b: [false, 1] };
console.log(JSON.stringify(obj));
