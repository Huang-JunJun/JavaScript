const oneEditAway = (first, second) => {
  if(Math.abs(first.length - second.length) > 1) return false

  const long = first.length > second.length ? first.split('') : second.split('')
  const short = long.join('') === first ? second.split('') : first.split('')
  let editCount = 0

  for (let i = 0; i < long.length; i++) {
    if(long.length === short.length) {
      if(long[i] === short[i]){
        continue
      } else {
        editCount++
      }
    } else {
      if(long[i] === short[i]){
        continue
      } else {
        short.splice(i, 0, long[i])
        editCount++
      }
    }
    
    if(editCount > 1) break
  }

  return editCount > 1 ? false : true
}

const first = 'dinitrophenylhydrazine'
const second = 'acetylphenylhydrazine'
console.log(oneEditAway(first, second));