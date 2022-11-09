var gameOfLife = function(board) {
  let row = board[0].length
  let col = board.length
  const memoBoard = JSON.parse(JSON.stringify(board))
  let cellNums = 0
  let deadCellNums = 0
  
  for (let i = 0; i < col; i++) {
    for(let index = 0; index < memoBoard[i].length; index++) {
      if(memoBoard[i][index]){
        if(i+1 < col && memoBoard[i+1][index]){
          cellNums++
        }
        if(index+1 < row && memoBoard[i][index+1]){
          cellNums++
        }
        if(0 <= index-1 && memoBoard[i][index-1]){
          cellNums++
        }
        if(index+1 < row && i+1 < col && memoBoard[i+1][index+1]){
          cellNums++
        }
        if(0 <= index-1 && i+1 < col && memoBoard[i+1][index-1]){
          cellNums++
        }
        if(0 <= index-1 && 0 <= i-1 && memoBoard[i-1][index-1]){
          cellNums++
        }
        if(0 <= i-1 && memoBoard[i-1][index]){
          cellNums++
        }
        if(index+1 < row && 0 <= i-1 && memoBoard[i-1][index+1]){
          cellNums++
        }
      } else {
        if(i+1 < col && memoBoard[i+1][index]){
          deadCellNums++
        }
        if(index+1 < row && memoBoard[i][index+1]){
          deadCellNums++
        }
        if(0 <= index-1 && memoBoard[i][index-1]){
          deadCellNums++
        }
        if(index+1 < row && i+1 < col && memoBoard[i+1][index+1]){
          deadCellNums++
        }
        if(0 <= index-1 && i+1 < col && memoBoard[i+1][index-1]){
          deadCellNums++
        }
        if(0 <= index-1 && 0 <= i-1 && memoBoard[i-1][index-1]){
          deadCellNums++
        }
        if(0 <= i-1 && memoBoard[i-1][index]){
          deadCellNums++
        }
        if(index+1 < row && 0 <= i-1 && memoBoard[i-1][index+1]){
          deadCellNums++
        }
      }
      // console.log('board[i][index]', board[i][index]);
      // console.log('cellNums', cellNums);
      if(cellNums < 2){
        board[i][index] = 0
      }
      if(cellNums > 3){
        board[i][index] = 0
      }
      if(deadCellNums === 3) {
        board[i][index] = 1
      }
      cellNums = 0
      deadCellNums = 0
    }
  }

  return board
}

const board = [
  [0,1,0],
  [1,0,1],
  [1,1,1],
  [1,0,1]
]

setInterval(() => {
  console.log(gameOfLife(board));
}, 1000)
