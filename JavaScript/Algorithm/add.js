/**
 * 不适用加号完成加法
 * 
 * 字符均为Number类型   将number类型转换成二进制字符串类型，再进行位运算
 * 不管是二进制还是十进制的加法，都是进位左移加上低位
 * 先对低位进行异或运算，再对进位进行与运算后进行左移
 */
var add = function(a, b) {
    let lower
    let higher

    if(a == 0) {
        return b
    }

    if(b == 0) {
        return a
    }

    while(true) {
        lower = a^b
        higher = (a&b)<<1
        if(higher == 0) {
            break
        }
        a = lower
        b = higher
    }

    return lower
};

a = 13
b = 12
console.log(add(a,b));