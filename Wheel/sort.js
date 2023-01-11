const arr = [100, 50, 20, 30, 80]

arr.sort((a, b) => {
  console.log(a, b);
  return a - b
})

console.log(arr);