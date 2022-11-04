
// const _items = Symbol('stackItems')
class Stack {
  constructor(){
    this.items = []
  }

  push(element) {
    this.items.push(element)
  }

  pop() {
    return this.items.pop()
  }

  peek() {
    return this.items[this.items.length-1]
  }

  isEmpty() {
    return this.count === 0
  }

  clear() {
    this.items = []
    return this.items
  }
}

const stack = new Stack()
stack.push(5)
stack.push(8)
console.log(stack.pop());
console.log(stack);
// 十进制转二进制
const decimalToBinary = (decNumber) => {
  const remStack = new Stack()
  let number = decNumber
  let rem
  let binaryString = ''

  while(number > 0) {
    rem = Math.floor(number % 2)
    remStack.push(rem)
    number = Math.floor(number / 2)
  }

  while(remStack.isEmpty()){
    remStack.pop()
  }

  return binaryString
}

console.log(decimalToBinary(233));