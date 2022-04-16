/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * 计算数字二进制中1的个数
 */
 var hammingWeight = function(n) {
    let ret = 0;
    for (let i = 0; i < 32; i++) {
        // << 为左移运算符 每运算一次就进行一次左移
        // 因为计算机是使用的二进制存储，所以在进行与运算时就相当于转换为了二进制，实际上并没有转换，而是本来就是二进制存储的
        if ((n & (1 << i)) !== 0) {
            ret++;
        }
    }
    return ret;
};

console.log(hammingWeight(33));