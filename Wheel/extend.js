// 继承的方法
// 原型链继承
// function SuperType() {
//   this.property = true
// }

// SuperType.prototype.getSuperValue = function() {
//   return this.property
// }

// function SubType() {
//   this.subproperty = false
// }

// // 继承SuperType
// SubType.prototype = new SuperType()
// SubType.prototype.getSubValue = function(){
//   return this.subproperty
// }
// let instance = new SubType()
// console.log(instance.getSuperValue());

// 盗用构造函数继承
function SuperType() {
  this.color = ['red', 'yellow', 'blue']
}

function SubType() {
  // 继承SuperType
  SuperType.call(this)
}

let instance1 = new SubType()

// 组合继承
// 寄生式继承
// 寄生式组合继承