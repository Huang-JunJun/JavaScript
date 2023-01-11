const findContinuousSequence = (target) => {
  // 从中间开始计算
  const n = Math.ceil(target / 2)
  const arr = []
  for (let i = 1; i <= n; i++) {
    let sum = 0
    const array = []
    for (let j = i; j <= n; j++) {
      sum += j
      array.push(j)
      if(sum === target) {
        arr.push(array)
        break
      }
    }
  }

  return arr
}

console.log(findContinuousSequence(87760));