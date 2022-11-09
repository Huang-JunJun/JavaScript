// 手写promiseRace
const promiseRace = (promises) => {
  if(!Array.isArray(promises)) return reject(new Error('传入的参数不是数组！'))
  
  let resolved = false
  return new Promise((resolve, reject) => {
    promises.forEach(p => {
      p.then(data => {
        if(!resolved) {
          resolved = true
          resolve(data)
        }
      }).catch(e => reject(e))
    })
  })
}

let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p1 resolved')
  }, 1000)
})

let p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('p2 resolved')
  }, 2000)
})

Promise.race([p1, p2]).then(data => {
  console.log(data);
})

promiseRace([p1, p2]).then(data => {
  console.log(data);
})
