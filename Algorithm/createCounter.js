var createCounter = function (init) {
	let count = init;
	return {
		increment: function () {
			return count++;
		},
		reset: function () {
			return init;
		},
		decrement: function () {
			return count--;
		},
	};
};

const counter = createCounter(5);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
