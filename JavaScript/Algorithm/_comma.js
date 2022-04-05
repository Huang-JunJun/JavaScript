function _comma(number) {
    const arr = `${number}`.split('')
    const arrList = arr.map(item => item)
  
    for (let i = arrList.length - 3; i >= 0;i = i - 3) {
      arr.splice(i, 0, ',')
    }
  
    return number > 0 ? arr.join('') : `${number}`
  }
  
  console.log(_comma(-123));
  