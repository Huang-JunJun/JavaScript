const rotate = (matrix) => {
  const reMatrix = []
  let arr = []
  
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      arr.unshift(matrix[j][i])
    }
    reMatrix.push(arr)
    arr = []
  }

  return reMatrix
}

const matrix = [[1,2,3],[4,5,6],[7,8,9]]

console.log(rotate(matrix));