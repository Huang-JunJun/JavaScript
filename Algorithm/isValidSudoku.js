const isValidSudoku = (board) => {
	// 用三个数组存储三个正方形块中的数字
	let arr1 = [];
	let arr2 = [];
	let arr3 = [];
	let isVaild = true;

	board.forEach((item, pos) => {
		if (!isVaild) {
			return;
		}

		item.forEach((k, index) => {
			if (item.indexOf(k) !== item.lastIndexOf(k) && k !== '.') {
				isVaild = false;
				return;
			}

			board.forEach((m) => {
				let j = pos + 1;
				while (j < board.length) {
					if (board[j][index] === k && k !== '.') {
						console.log(2);
						isVaild = false;
						break;
					}

					j++;
				}
			});

			if (index < 3) {
				arr1.push(k);
			} else if (index > 5) {
				arr3.push(k);
			} else {
				arr2.push(k);
			}
		});

		if (arr1.length === 9) {
			arr1.forEach((i) => {
				if (arr1.indexOf(i) !== arr1.lastIndexOf(i) && i !== '.') {
					console.log(3);
					isVaild = false;
					return;
				}
			});
			arr2.forEach((i) => {
				if (arr2.indexOf(i) !== arr2.lastIndexOf(i) && i !== '.') {
					isVaild = false;
					return;
				}
			});
			arr3.forEach((i) => {
				if (arr3.indexOf(i) !== arr3.lastIndexOf(i) && i !== '.') {
					isVaild = false;
					return;
				}
			});

			arr1 = [];
			arr2 = [];
			arr3 = [];
		}
	});

	return isVaild;
};

const board = [
	['.', '.', '.', '.', '.', '.', '5', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['9', '3', '.', '.', '2', '.', '4', '.', '.'],
	['.', '.', '7', '.', '.', '.', '3', '.', '.'],
	['.', '.', '.', '.', '.', '.', '.', '.', '.'],
	['.', '.', '.', '3', '4', '.', '.', '.', '.'],
	['.', '.', '.', '.', '.', '3', '.', '.', '.'],
	['.', '.', '.', '.', '.', '5', '2', '.', '.'],
];

console.log(isValidSudoku(board));
