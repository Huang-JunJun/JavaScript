/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 *  整数转换。编写一个函数，确定需要改变几个位才能将整数A转成整数B。
 * 解决思路：使用位运算的异或运算来进行计算  异或运算是 相同返回0，相异返回1 然后计算1的个数
 */
 var convertInteger = function(A, B) {
    let sum = 0
    let temp = A ^ B
    // 进行与运算得到1的个数
    while(temp != 0) {
        sum++
        // temp-1相当于将最右侧的1往后进一位 然后进行与运算 达到消除1的效果 从而计算到1的个数
        temp = temp & temp-1
    }
    return sum
};