/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

// 思路1： 首先判断两个字符串的长度是否相等，然后判断两个字符串的字符是否相等
var CheckPermutation = function(s1, s2) {
    // 存在缺陷：如果两个字符串都出现重复相同的字符的时候就会出现错误的结果

    let sum = 0; // 记录相应字符存在个数

    if(s1.length != s2.length) {
        // 长度不同返回false
        return false
    } else {
        for(let i=0;i < s1.length;i++) {
            for(let j=0;j < s2.length;j++) {
                if(s1.charAt(i) == s2.charAt(j)) {
                    sum++
                }
            }
        }

        if(sum == s1.length) {
            return true
        } else {
            return false
        }
    }
};

function CheckPermutation(s1,s2) {
    // 改进版 对取到的字符串数组进行排序后进行 相对应的比较 就能得到正确的结果
    if(s1.length != s2.length) {
        // 长度不同返回false
        return false
    } else {
        // 得到以每个字符为元素的数组
        s1 = s1.split('')
        s2 = s2.split('')
        // 再对每个数组进行排序
        s1 = s1.sort()
        s2 = s2.sort()

        // 判断join后得到的字符是否相同
        return s1.join('') === s2.join('')
    }
}