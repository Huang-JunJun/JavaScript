const sumNums = (n) => {
  return n && (n = n + sumNums(n-1))
}

console.log(sumNums(9));