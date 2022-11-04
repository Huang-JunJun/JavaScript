const factorialIterative = (number) => {
  if(number < 0) return
  let sum = 0
  const length = number
  for (let i = 1; i <= length - 1; i++) {
    if(!sum) {
      sum = number * (number - 1)
      number = number - 2
    } else {
      sum = sum * number
      number = number - 1
    }
  }

  return sum
}

const factorialIter = (number) => {
  if(number < 0) return
  if (number === 1) {
    return 1
  } else {
    return number * factorialIter(number-1)
  }
}

console.log(factorialIterative(5));
console.log(factorialIter(5));