const maximumValue = (strs) => {
  let maxValue = 0

  strs.forEach(i => {
    const arr = i.split('')
    // 表示为纯字母
    let flag = true
    let numLength = 0
    arr.forEach(item => {
      // 表示为存在字母
      if(isNaN(Number(item))){
        flag = false
      } else {
        numLength++
      }
    })

    if(!flag) {
      maxValue = Math.max(maxValue, arr.length)
    }

    if(numLength === arr.length) {
      maxValue = Math.max(maxValue, Number(i))
    }
  })

  return maxValue
}

let strs = ["1","01","001","0001"]
console.log(maximumValue(strs));