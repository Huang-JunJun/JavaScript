const strStr = (haystack, needle) => {
  const stack = haystack.split('')
  const arr = needle.split('')
  
  for (let i = 0; i < stack.length-arr.length+1; i++) {
    let k = 0
    let j = i

    while(k < arr.length){
      if(stack[j] === arr[k]){
        j++
        k++
      } else {
        break
      }
    }

    if(k === arr.length){
      return i
    }
  }

  return -1
}

const haystack = "adbutsad"
const needle = "sad"

console.log(strStr(haystack, needle));