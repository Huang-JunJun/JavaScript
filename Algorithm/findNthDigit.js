const findNthDigit = (n) => {
  let str = ''
  let count = 0

  while(count <= n && str.length <= n) {
    str = str + count
    count++
  }
  console.log(str.length);
  return str.charAt(n)
}

console.log(findNthDigit(100000000));