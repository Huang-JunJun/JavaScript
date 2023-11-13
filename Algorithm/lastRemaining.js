const lastRemaining = (n, m) => {
	let ans = 0;

	for (let i = 2; i < n; i++) {
		ans = (ans + m) % 2;
	}
};

const n = 5;
const m = 3;

console.log(lastRemaining(5, 3));
