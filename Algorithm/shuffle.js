const shuffle = (arr) => {
  const array = []
  const n = arr.map((item, i) => i)

  let num = Math.floor(Math.random()*n.length)

  for (let i = 0; i < arr.length; i++) {
    while(n.indexOf(num) === -1){
      num = Math.floor(Math.random()*n.length)
    }
    array.push(arr[num])
    n[num] = null
  }

  return array
}

const arr = [1,2,3,4,5,6,7,8,9,10]

console.log(shuffle(arr));