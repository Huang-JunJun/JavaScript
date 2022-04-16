/* 
    字符串的扩展方法
*/

// 模板字符串
// ES6新增的创建字符串的方式，使用反引号定义

/* let name = `zhangsan`
// 模板字符串中可以解析变量
let sayHello = `hello,my name is ${name}`
console.log(sayHello); */

// 模板字符串中可以换行
/* let result = { 
    name: 'zhangsan', 
    age: 20, 
    sex: '男' 
} 
let html = ` <div>
    <span>${result.name}</span>
    <span>${result.age}</span>
    <span>${result.sex}</span>
</div> `;
console.log(html) */

// 模板字符串中可以调用函数
/* const sayHello = function () { 
    return '落霞与孤鹜齐飞，秋水共长天一色';
}; 
let greet = `${sayHello()} 哈哈哈哈`; 
console.log(greet); // 落霞与孤鹜齐飞，秋水共长天一色哈哈哈哈
 */

// startWith()和endsWith()方法
// startWith() 表示参数字符串是否在原字符串的头部（即判断字符串是否以某字符开头），返回布尔值
// endsWith() 表示参数字符串是否在原字符串的尾部（即判断字符串是否以某字符结尾），返回布尔值
/* let str = 'Hello world!';
let n = str.startsWith('Hello') // true 
str.endsWith('!')       // true
console.log(n) */

// repeat()
// 表示将原字符串重复n次，返回一个新的字符串
/* 'x'.repeat(3)      // "xxx" 
'hello'.repeat(2)  // "hellohello" */
