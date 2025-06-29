const inputπ = (num) => {
	const π = 3.14159265358979323846264338327950288;
	return num === 0 ? 3 : Number('3.' + String(π).split('.')[1].slice(0, num));
};

console.log(inputπ(4));
