const spiralOrder = (matrix) => {
  const arr = []
  const matrixLength = matrix[0].length
  for (let i = 0; i < matrix.length; i++) {
    if(i === 0) {
      for (let j = 0; j < matrixLength; j++) {
        arr.push(matrix[i][j])
      }
    } else if(i === 1) {
      arr.push(matrix[i][matrixLength - 1])
    } else if (i === 2) {
      for (let j = 0; j < matrixLength; j++) {
        arr.push((matrix[i].reverse())[j])
      }
    }
  }
  
}