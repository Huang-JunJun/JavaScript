const getLeastNumbers = (arr, k) => {
  const list = arr.sort((a, b) => a - b)
  const newArr = []

  for (let i = 0; i < k; i++) {
    newArr.push(list[i])
  }

  return newArr
}