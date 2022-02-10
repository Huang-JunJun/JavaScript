// 数组循环的方法汇总
let arr = [1,2,3,4,5]
// for...of循环
// for(let value of arr) {
//     console.log(value);
// }

// for...in循环
// for(let i in arr) {
//     console.log(arr[i]);
// }

// forEach()循环 本身没有返回值 可以在循环内进行操作
// arr.forEach((item,index,value) => {
//     // 返回值
//     console.log(item);
//     // 返回索引
//     console.log(index);
//     // 返回整个数组
//     console.log(value);
// })

// entries() 方法
var fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.entries());

