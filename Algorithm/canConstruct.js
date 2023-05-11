const canConstruct = (ransomNote, magazine) => {
	const magazineMap = new Map();
	const ransomNoteMap = new Map();
	for (const value of magazine) {
		magazineMap.set(value, (magazineMap.get(value) || 0) + 1);
	}
	for (const value of ransomNote) {
		ransomNoteMap.set(value, (ransomNoteMap.get(value) || 0) + 1);
	}

	for (const value of ransomNoteMap) {
		if (
			!magazineMap.has(value[0]) ||
			ransomNoteMap.get(value[0]) > magazineMap.get(value[0])
		) {
			return false;
		}
	}

	return true;
};

const ransomNote = 'aa';
const magazine = 'ab';
console.log(canConstruct(ransomNote, magazine));
