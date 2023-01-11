const isValid = function(s) {
  // 补全代码
  let map = new Map([
    ['(', ')'],
    ['{', '}'],
    ['[', ']']
  ])

  const arr = []
  for (const num of s) {
    if(map.has(num)){
      if(map.get(num) !== arr.pop()){
        return false
      }
    } else {
      arr.push(num)
    }
  }

  return arr.length > 0 ? false : true
}

const isValid1 = function(s) {
  // 补全代码
  const arr = s.split('')
  let flag = true
  const stack = []
  let top
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '(':
        stack.push(arr[i])
        break;
      case '{':
        stack.push(arr[i])
        break;
      case '[':
        stack.push(arr[i])
        break;
      case ')':
        top = stack.pop()
        if(top !== '('){
          flag = false
        }
        break;
      case '}':
        top = stack.pop()
        if(top !== '{'){
          flag = false
        }
        break;
      case ']':
        top = stack.pop()
        if(top !== '['){
          flag = false
        }
        break;
      default:
        break;
    }
  }

  return flag
}

let s = '(){}[]'
console.log(isValid1(s));