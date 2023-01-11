function factorial(n) {
    let sum = n
    
    if (n >= 2) {
      sum = sum * factorial(n-1)
    }

    return sum
}

console.log(factorial(5));