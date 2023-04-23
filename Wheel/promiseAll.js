// 手写promise.all
const promiseAll = (promises) => {
  if(!Array.isArray(promises)) return reject(new Error('传入的参数不是数组！'))
  // 只接受数组
  return new Promise((resolve, reject) => {
    let results = []
    for (let i = 0; i < promises.length; i++) {
      Promise.resolve(promises[i]).then(value => {
        results[i] = value
        if(results.length === promises.length) {
          resolve(results)
        }
      }).catch(e => reject(e))
    }
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

// Promise.all([p1, p2]).then(data => {
//   console.log(data);
//   p1.then(state => console.log(state))
// })
// promiseAll([p1, p2]).then(data => {
//   console.log(data);
// })