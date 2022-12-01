const getWaveBravery = (n) => {
  const arr = []

  for (let i = 0; i < n; i++) {
    const home = Math.floor(Math.random()*4)
    const visit = Math.floor(Math.random()*4)
    arr.push(`${home}:${visit}`)
  }

  const set = Array.from(new Set(arr))
  let maxSum = 0
  let max
  set.forEach(item => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] === item){
        sum++
      }
    }
    if(sum > maxSum){
      maxSum = sum
      max = item
    }
  })

  return max
}

console.log(getWaveBravery(1000));