// Array.from
// 该方法为全局方法，可以接受一个可迭代或类数组的值，并从中获取一个‘真正的’数组。

let arrayLike = {
  0: 'Hello',
  1: 'World',
  length: 2
}

let arr = Array.from(arrayLike)
console.log(arr);