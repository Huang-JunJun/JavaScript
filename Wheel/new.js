// new操作做了哪些事情
// 1.创建一个空对象。
// 2.该对象的隐式原型指向该函数的原型。
// 3.这个新对象会绑定到函数调用的this。
// 4.如果函数没有返回其他对象，那么 new 表达式中的函数调用会自动返回这个新对象。
function newfun(fn, ...args) {
  // 1.创建一个新对象，该对象的隐式原型指向该构造函数的原型上
  const newobj = Object.create(fn.prototype)
  // 2.调用函数，把this绑定给这个对象
  const result = fn.apply(newobj, args)
  // 3.判断该函数是否有返回对象，如果有返回对象则返回这个返回对象，如果没有返回对象则返回新的对象
  return result && typeof result === 'object' ? result : newobj
}

function test(name, age) {
  this.name = name
  this.age = age

  // return {
  //   name: this.name,
  //   age: this.age
  // }
}
const amin = new test('xiaoming', 17)
const amax = newfun(test, 'xiaoming', 17)

console.log(amin, amax);