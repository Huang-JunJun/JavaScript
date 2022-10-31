// 冒泡排序
const bubbleSort = (array) => {
  for (let i = 0; i < array.length - 1; i++) {
    let flag = false
    for (let j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j+1]) {
        let swap = array[j]
        array[j] = array[j+1]
        array[j+1] = swap
        flag = true
      }
    }

    if(!flag) {
      return array
    }
  }

  return array
}

const arr = [3, 4, 2, 1, 5]

console.log(bubbleSort(arr));