  const countDigitOne = (n) => {
    let pre
    let last
    n = n.toString()
    let sum = 0
    for (let i = 1; i <= n; i++) {
      const arr = i.toString().split('')
      for (let j = 0; j < arr.length; j++) {
        if(arr[0] === '1') {
          sum = sum + (arr.length - 1)
          break
        }
        if(arr[j] === '1') {
          sum++
        }
      }
    }

    return sum
}

console.log(countDigitOne(65536));