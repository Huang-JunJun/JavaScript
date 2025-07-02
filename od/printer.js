const printer = (arr) => {
	if (!Array.isArray(arr)) {
		throw new Error('Input must be an array');
	}

	const priorityMap = new Map();
	// 区分输入与输出
	arr.forEach((item, index) => {
		if (item.split(' ')[0] === 'IN') {
			const priority = item.split(' ')[2];
			const value = item.split(' ')[1];
			if (
				!priorityMap.has(value) ||
				priorityMap.get(value).priority < priority
			) {
				priorityMap.set(index + 1, { priority: priority, value: value });
			}
		}
	});

	const output = [];
	arr.forEach((item) => {
		if (item.split(' ')[0] === 'OUT') {
			output.push({
				out: item.split(' ')[1],
			});
		}
	});

	output.forEach((item) => {
		let curPriority = 0;
		let curIndex = 0;
		// 循环priorityMap，找到对应的优先级
		for (const [key, value] of priorityMap) {
			if (item.out === value.value) {
				if (value.priority > curPriority) {
					curIndex = key;
					curPriority = value.priority;
				}
			}
		}

		if (curIndex === 0) {
			console.log(null);
		} else {
			console.log(curIndex);

			priorityMap.delete(curIndex);
		}
	});
};

// 测试用例
const arr = ['IN 1 1', 'IN 1 3', 'IN 1 1', 'IN 1 3', 'OUT 1', 'OUT 1'];
printer(arr);

// 标准答案
function printer(events) {
	// 初始化5台打印机的队列和文件编号计数器
	const queues = Array.from({ length: 5 }, () => []);
	let fileId = 0;
	const result = [];

	for (const event of events) {
		const [type, printerIdStr, priorityStr] = event.split(' ');
		const printerId = parseInt(printerIdStr) - 1; // 转为0-based索引

		if (type === 'IN') {
			fileId++; // 文件编号递增
			const priority = parseInt(priorityStr);

			// 添加到对应打印机的队列
			queues[printerId].push({ id: fileId, priority });
		} else if (type === 'OUT') {
			const queue = queues[printerId];

			if (queue.length === 0) {
				result.push('NULL');
				continue;
			}

			// 找出最高优先级且最早进入的文件
			let bestIndex = 0;
			for (let i = 1; i < queue.length; i++) {
				const current = queue[i];
				const best = queue[bestIndex];

				// 优先级更高，或优先级相同但更早进入（id更小）
				if (
					current.priority > best.priority ||
					(current.priority === best.priority && current.id < best.id)
				) {
					bestIndex = i;
				}
			}

			// 取出并记录文件编号
			const [printedFile] = queue.splice(bestIndex, 1);
			result.push(printedFile.id.toString());
		}
	}

	// 输出结果
	for (const res of result) {
		console.log(res);
	}
}
