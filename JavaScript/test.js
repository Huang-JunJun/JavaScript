function _factorial(number) {
  // 补全代码
  let range = {
    from: 1,
    to: number
  }
  range[Symbol.iterator] = function () {
    return {
      current: this.from,
      last: this.to,

      next() {
        if (this.current <= this.last) {
          return { done: false, value: this.current++ }
        } else {
          return { done: true}
        }
      }
    }
  }
  let sum = 1
  for (let key of range) {
    sum = sum * key
  }

  return sum
}

console.log(_factorial(5));