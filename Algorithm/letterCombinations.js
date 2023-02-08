const letterCombinations = (digits) => {
  const ans = []
  const t = []
  const arr = []
  const list = digits.split('')
  const map = new Map()
  map.set('1', '')
  map.set('2', 'abc')
  map.set('3', 'def')
  map.set('4', 'ghi')
  map.set('5', 'jkl')
  map.set('6', 'mno')
  map.set('7', 'pqrs')
  map.set('8', 'tuv')
  map.set('9', 'wxyz')

  for (let i = 0; i < list.length; i++) {
    list[i] = map.get(list[i])
    const element = list[i].split('')
    for (let j = 0; j < element.length; j++) {
      arr.push(element[j])
    }

  }

  const dfs = (cur) => {
    if(cur === arr.length){
      if(t.slice().length === list.length){
        ans.push(t.slice().join(''))
      }
      return;
    }
    t.push(arr[cur])
    dfs(cur+1)
    t.pop(arr.length-1)
    dfs(cur+1)
  }

  dfs(0)

  return ans
}

const digits = "23"

console.log(letterCombinations(digits));