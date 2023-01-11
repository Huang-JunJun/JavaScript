const longestPalindrome = (s) => {
  let maxLength = 0
  let str = ''
  const validPalindrome = (arr) => {
    let l = arr[0]
    let r = arr[arr.length-1]
    let flag = true

    while(l < r){
      if(arr[l] !== arr[r]){
        flag = false
        break
      }
      l++
      r--
    }

    return flag
  }

  let arr = s.split('')
  let array = []
  for (let i = 1; i < arr.length-1; i++) {
    let l = i-1
    let r = i+1
    while(l >= 0 && r < arr.length-1){
      array = arr.slice(l, r+1)
      if(validPalindrome(array)){
        const length = array.length
        if(maxLength < length) {
          str = array.join('')
        }
        maxLength = Math.max(arr.length, maxLength)
        l--
        r++
      } else {
        array = []
        break
      }
    }
  }

  return str
}

console.log(longestPalindrome("cbbd"));