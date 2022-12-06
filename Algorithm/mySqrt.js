const mySqrt = (x) => {
  let i = 0
  
  while(x >= i) {
    if(i * i === x){
      break
    }
    if(((i - 1) * (i - 1) < x && x < i * i)){
      i = i - 1
      break
    }
    i++
  }

  return i
}

console.log(mySqrt(2));