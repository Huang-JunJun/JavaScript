function getLongestPalindrome( A ) {
  // write code here
  const arr = A.split('')
  const newArr = []
  for(let i=0;i<arr.length;i++){
    let r = 0
    let l = 0
    if(arr.lastIndexOf(arr[i]) === i){
      continue
    } else {
      r = arr.lastIndexOf(arr[i])
      l = i
      while(r !== l){
        newArr.push(arr[r])
        newArr.push(arr[l])
        r--
        l++
        if(arr[l] !== arr[r]){
          newArr.length = 0
          break
        }
      }
      if(l === r){
        newArr.push(arr[l])
        break
      }
    }
  }

  return newArr.length
}

console.log(getLongestPalindrome('abc1234321ab'));