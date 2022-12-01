const reverseWords = (s) => {
  const arr = s.split(' ').reverse().filter(i => i !== '').join(' ')
  
  return arr
}
const s = "a good   example"
reverseWords(s)