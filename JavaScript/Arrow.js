/* 
    箭头函数
*/

function sum(num1, num2) { 
    return num1 + num2; 
}
// 箭头函数定义方式：
const sum = (num1, num2) => num1 + num2; 
// 只有一个参数可以省略小括号
function fn (v) {
    return v;
} 
const fn = v => v;

// 箭头函数主要是解决了this指向不明的问题
// 箭头函数不绑定this关键字，箭头函数没有自己的this关键字，箭头函数中的this指向的是函数定义位置的上下文this

// 经典题
// 剩余参数 
function sum (first, ...args) { // ...表示剩余的元素都放在了一个数组中
    console.log(first);
    console.log(args);
}

let sum = [10,20,30]

// 数组求和
const sum = (...args) => {
    let total = 0;
    args.forEach(item => total += item);
    // forEach 循环数组，数组有多少个值循环就会执行多少次，item就是当前循环的这一项
    return total
}