
const bubbleSort = (array) => {
  for (let i = 0; i < array.length-1; i++) {
    for (let j = 0; j < array.length-i-1; j++) {
      if(array[j] > array[j+1]){
        let tmp = array[j]
        array[j] = array[j+1]
        array[j+1] = tmp
      }
    }
  }

  return array
}

const selectionSort = (array) => {
  let minIndex
  for (let i = 0; i < array.length-1; i++) {
    minIndex = i
    for (let j = i+1; j < array.length; j++) {
      if(array[j] < array[minIndex]){
        let tmp = array[minIndex]
        array[minIndex] = array[j]
        array[j] = tmp
      }
    }
  }

  return array
}

const insertionSort = (array) => {
  // 依次与前面的元素进行比较，然后插入
  let j
  let tmp
  for (let i = 1; i < array.length; i++) {
    j = i
    tmp = array[i]
    while(tmp < array[j-1] && j > 0){
      array[j] = array[j-1]
      j--
    }
    array[j] = tmp
  }

  return array
}

const shellSort = (array) => {
  let gap = Math.floor(array.length / 2)
  while(gap >= 1){
    for (let i = gap; i < array.length; i++) {
      let j = i
      let tmp = array[i]
      while (tmp < array[j - gap] && j > 0) {
        array[j] = array[j - gap]
        j = j - gap
      }
      array[j] = tmp
    }
    gap = Math.floor(gap / 2)
  }

  return array
}

const arr = [2,1,8,4,3,7,6]

console.log(shellSort(arr));