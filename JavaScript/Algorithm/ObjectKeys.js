// Object.keys()方法的使用
// 参数
// obj
// 要返回其枚举自身属性的对象。
// 返回值
// 一个表示给定对象的所有可枚举属性的字符串数组。

let obj = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    1: 'a',
    2: 'b',
    3: 'c'
}
console.log(Object.keys(obj)); // a,b,c
console.log(Object.keys(obj2)); // 1,2,3,