const isPalindrome = (x) => {
  if(x < 0) {
    return false
  }
  if(x.toString().length === 1) return true

  const arr = x.toString().split('')
  let l = 0
  let r = arr.length-1
  for (let i = 0; i < arr.length; i++) {
    if(arr[l] === arr[r] && l < r) {
      l++
      r--
      if(l >= r) break
    } else {
      return false
    }
  }

  return true
}

console.log(isPalindrome(121));