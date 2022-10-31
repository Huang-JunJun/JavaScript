const arr = [
  {name: '小明', age: 18},
  {name: '小明', age: 13},
  {name: '小红', age: 12},
  {name: '小红', age: 16},
  {name: '小王', age: 17},
  {name: '小红', age: 10},
]

const removeObj = (arr) => {
  const array = []

  for (let i = 0; i < arr.length; i++) {
    if(!array.some(item => {
      return item.name === arr[i].name
    })) {
      array.push(arr[i])
    }
  }

  return array
}

console.log(removeObj(arr));