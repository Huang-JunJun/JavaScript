/* 
    解构赋值
    ES6中允许从数组中提取值（分解数据结构），按照对应位置，对变量赋值。对象也可以实现结构
*/

// let [a, b, c] = [1, 2, 3];
// // 或者
// let ary = [1,2,3]
// let [a,b,c] = ary
// console.log(a)
// console.log(b)
// console.log(c) //1 2 3

/* 对象解构 实际上就是属性匹配，允许变量的名字匹配对象中属性的名字，如果匹配成功，就将对象中属性的值赋值给变量 */
let person = { name: 'zhangsan', age: 18 }
let { name, age } = person
console.log(name);
console.log(age);

// 另一种写法
let person = {name:'zhangsan',age:20,sex:'男'}
let {name: myName, age: myAge} = person; // myName myAge 属于别名
console.log(myName); // 'zhangsan' 
console.log(myAge); // 20
