/* 
    Set数据结构
    ES6提供了新的数据结构Set,他类似于数组,但是成员的值都是唯一的,没有重复的值.
    Set本身就是一个构造函数，用来生成Set数据结构。
*/
/* const s = new Set();
console.log(s.size);
// Set函数可以接受一个数组作为参数，用来初始化
const set = new Set([1,2,3,4,4])
// 可以用来数组去重
console.log(set.size); */

// Set的实例方法
// add(value)   添加某个值，返回Set结构本身，add（）方法可以链式调用
// delete（value）  删除某个值，返回一个布尔值，表示删除是否成功
// has(value)   返回一个布尔值，表示该值是否为Set的成员
// clear()  清楚所有成员，没有返回值
const s = new Set();
s.add(1).add(2).add(3); // 向 set 结构中添加值 可以链式调用
s.delete(2)             // 删除 set 结构中的2值 
s.has(1)                // 表示 set 结构中是否有1这个值 返回布尔值 
s.clear()               // 清除 set 结构中的所有值
// 遍历 Set 结构的实例与数组一样，也拥有forEach方法，用于对每个成员执行某种操作，没有返回值。
// s.forEach(value => console.log(value))
// const s = new Set(['a','b','c']);
// s.forEach(value => {   //value调用时候传递的参数，即为当前循环的值
// 	console.log(value)
// })  //a b c
const objArr = new Set([
    {
        name: 'tom'
    },
    {
        name: 'tom'
    },
    {
        name: 'tom'
    },
    {
        name: 'tom'
    },
])

const sar = new Set([1,1,1,2,3])
const strArr = new Set(['1','1','1','2','3'])
const arr = [1,1,1,2,3]
const arrTest = new Set(arr)
// Set数据结构转换为数组的方法
// 1.使用Array.from方法
const newArr = Array.from(arrTest)
// var str = 'hello world!';
// console.log(Array.from(str)) // ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"]
console.log(newArr);
// 2.使用三点运算符
const set = new Set(['HELLO','JS'])
const array = [...set]
// 3.使用forEach 每次都Push进去
console.log(array);
console.log(strArr);
console.log(arrTest);
console.log(sar);
console.log(objArr.name);