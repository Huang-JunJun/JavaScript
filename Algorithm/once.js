var once = function (fn) {
	let count = 0;
	return function (...args) {
		if (count) {
			return undefined;
		}
		count++;
		return fn.call(null, ...args);
	};
};

const fn = (a, b) => {
	return a + b;
};

console.log(once());
console.log(once());
console.log(once());
console.log(once());
console.log(once());
