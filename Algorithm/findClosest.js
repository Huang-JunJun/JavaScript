// const findClosest = (words, word1, word2) => {
// 	let distance = 0;
// 	let word;
// 	let j = 0;

// 	while (words.length > 0) {
// 		if (word === words[0]) {
// 			j = 1;
// 			words.splice(0, 1);
// 			continue;
// 		}

// 		if (j !== 0) {
// 			j++;
// 		}

// 		if (words[0] === word1 || words[0] === word2) {
// 			word = words[0];
// 			if (j === 0) {
// 				j++;
// 			} else {
// 				distance = j > distance && distance !== 0 ? distance : j - 1;
// 				j = 1;
// 			}
// 		}

// 		words.splice(0, 1);
// 	}

// 	return distance;
// };

const findClosest = (words, word1, word2) => {
	let index1 = -1;
	let index2 = -1;
	let minDistance = Infinity;

	for (let i = 0; i < words.length; i++) {
		const word = words[i];

		if (word === word1) {
			index1 = i;
		} else if (word === word2) {
			index2 = i;
		}

		if (index1 !== -1 && index2 !== -1) {
			const distance = Math.abs(index1 - index2);
			minDistance = Math.min(minDistance, distance);
		}
	}

	return minDistance === Infinity ? -1 : minDistance;
};

console.log(
	findClosest(
		['I', 'am', 'a', 'student', 'from', 'a', 'university', 'in', 'a', 'city'],
		'a',
		'student'
	)
);
