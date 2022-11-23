const reverseLeftWords = (s, n) => {
  let str = s.slice(n, s.length)
  let newStr = s.slice(0, n)

  return str + newStr
}

console.log(reverseLeftWords('abcde', 2));