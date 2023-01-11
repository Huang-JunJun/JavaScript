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


const bubSort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    for (let j = 0; j < arr.length-i-1; j++) {
      if(arr[j] > arr[j+1]) {
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }

  return arr
}

const selectSort = (arr) => {
  let curIndex

  for (let i = 0; i < arr.length-1; i++) {
    curIndex = i
    for (let j = i; j < arr.length; j++) {
      if(arr[j] < arr[curIndex]) {
        curIndex = j
      }
    }
    let temp = arr[i]
    arr[i] = arr[curIndex]
    arr[curIndex] = temp
  }

  return arr
}

const insertSort = (arr) => {
  for (let i = 0; i < arr.length-1; i++) {
    let j = i
    while(arr[j] > arr[j+1] && j>=0){
      let temp = arr[j]
      arr[j] = arr[j+1]
      arr[j+1] = temp
      j--
    } 
  }

  return arr
}

const quickSort = (arr) => {
  if (arr.length <= 1) return arr
  let arr1 = [], arr2 = []
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[0]) {
      arr1.push(arr[i])
    } else {
      arr2.push(arr[i])
    }
  }
  arr1 = quickSort(arr1)
  arr2 = quickSort(arr2)
  arr1.push(arr[0])
  return arr1.concat(arr2)
}

const a = [29,10,14,37,1,22,25]
// console.log(bubSort(a));
console.log(quickSort(a));