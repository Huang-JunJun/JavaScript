// 插入排序
const insertSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    const curValue = arr[i]
    let j = i - 1
    while(j >= 0 && curValue < arr[j]) {
      arr[j+1] = arr[j]
      j--
    }
    arr[j-1] = curValue
  }

  return arr
}

const nums = [5, 4, 8, 7, 6, 3]

console.log(insertSort(nums));