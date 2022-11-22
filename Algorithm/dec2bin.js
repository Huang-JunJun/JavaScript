const dec2bin = (num) => {
    const stack = []

    while (num > 0) {
      stack.push(num % 2)
      num = Math.floor(num / 2)
    }

    return stack.reverse().join('')
}

console.log(dec2bin(100));