const findNumberIn2DArray = (matrix, target) => {
    for (let i = 0; i < matrix.length; i++) {
        const map = new Map()
        matrix[i].forEach((item, j) => {
            map.set(item, j)
        })
        if (map.has(target)) {
            return true
        }
    }

    return false
}
const matrix = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
console.log(findNumberIn2DArray(matrix, 20));