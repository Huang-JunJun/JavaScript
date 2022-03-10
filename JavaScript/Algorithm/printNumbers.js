/**
 * @param {number} n
 * @return {number[]}
 * 实现思路：把数字类型转化为字符串类型再判断长度
 */
 var printNumbers = function(n) {
    let num = 1
    let newArr = []

    while((num.toString()).length <= n) {
        newArr.push(num)
        num++
    }

    return newArr
};

console.log(printNumbers(2));