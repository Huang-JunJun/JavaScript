/* 
    给定两个整型数字 N 与 M，以及表示比特位置的 i 与 j（i <= j，且从 0 位开始计算）。

    编写一种方法，使 M 对应的二进制数字插入 N 对应的二进制数字的第 i ~ j 位区域，不足之处用 0 补齐。
    输入：N = 1024(10000000000), M = 19(10011), i = 2, j = 6
    输出：N = 1100(10001001100)

    JavaScript 十进制转二进制：
    let num = 123
    num.toString(2) 可以将Number类型十进制转为二进制 不改变原数字 返回二进制字符串
    JavaScript 二进制转十进制
    let num = 10000000000
    parseInt(num,2) 可以将Number类型二进制转为十进制 不改变原数字 返回十进制Number类型
*/
/* 
    实现思路：先将N,M转为二进制字符串，再将M替换掉N字符串的i到j的位置。如果M转换成字符串的长度大于N的长度，则直接替换M。
*/
var insertBits = function(N, M, i, j) {
    // 先判断转换后的M和N的长度比较
    // 转换N,M 成二进制字符串
    let n = N.toString(2)
    let m = M.toString(2)

    if(m.length >= n.length) {
        n = m
    } else {
        // 截取n中i到j之间的字符串 然后用m替换掉
        let str = n.slice(n.length-j-1,n.length-i-1)
        console.log(str);
        // 得到替换掉的n
        n = n.replace(str,m)
        console.log(n);
    }
    // 将n转为十进制数字类型
    N = parseInt(n,2)

    return N
};

let N = 1024, M = 19 ,i = 2, j = 6

let n = insertBits(N,M,i,j)
console.log(n);