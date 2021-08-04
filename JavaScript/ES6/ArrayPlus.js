/* 
    数组的扩展方法
*/

// 扩展运算符的展开语法：
// 扩展运算符可以将数组或者对象转为用逗号分隔的参数序列

/* let ary = [1, 2, 3];
console.log(...ary);    // 1 2 3 
console.log(1, 2, 3)  //1 2 3

// 扩展运算符用作合并数组
let ary1 = [1,2,3]
let ary2 = [3,4,5]
// 进行的是深拷贝
let ary3 = [...ary1,...ary2]
ary1[0] = 7
console.log(ary3); */

// 构造函数方法 Array.from() 
// 将类/伪数组或可遍历对象转换为真正的数组 实用
/* let arrayLike = {
    '0': 'a',
    '1': 'b',
    '2': 'c',
    length: 3
}; 
let arr2 = Array.from(arrayLike); // ['a', 'b', 'c'] */
// 方法还可以接受第二个参数（数组中的函数，作用是对数组中的元素进行加工处理，数组中有多少个元素，函数就会被调用多少次，函数有一个形参代表当前要处理的那个值，只需要将当前要处理的值返回即可），
// 作用类似于数组的map()方法，用来对每个元素进行处理，将处理后的值放入返回的数组。

/* let arrayLike = { 
    "0": 1,
    "1": 2,
    "length": 2
}
let newAry = Array.from(arrayLike, item => item *2)
console.log('@',newAry) */

// find()方法
// 用于查找第一个符合条件的数组成员，如果没有找到就返回undefined
/* let ary = [{
    id: 1,
    name: '张三'
}, { 
    id: 2,
    name: '李四'
}]; 
let target = ary.find((item, index) => item.id == 2);//item表示当前循环到的值，index表示循环到的索引，没有用到index可以省略
console.log(target) */

// findIndex()
// 用于找出第一个符合条件的数组成员的位置，如果没有找到就返回-1
/* let ary = [1, 5, 10, 15];
let index = ary.findIndex((value) => value > 9); 
console.log(index); // 2 */

// includes()
// 表示某个数组是否包含给定的值，返回布尔值
let a = [1, 2, 3].includes(2) // true 
let b = [1, 2, 3].includes(4) // false
console.log(a)
console.log(b)

