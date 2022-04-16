/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 * 字符串轮转问题 字符串轮转。给定两个字符串s1和s2，请编写代码检查s2是否为s1旋转而成（比如，waterbottle是erbottlewat旋转后的字符串）。
 * 思路：先判断两个字符串长度是否相等，如果不相等就直接返回false
 *      如果相等就判断两个s1，或者两个s2中是否含有另一个字符串
 */
 var isFlipedString = function(s1, s2) {
    // 对长度是否相等进行判断
    if(s1.length != s2.length) {
        return false
    } else {
        let s3 = s1 + s1 
        if(s3.indexOf(s2) > -1) {
            return true
        } else {
            return false
        }
    }
};

let s1 = "aasdasd", s2 = "dasdasd"
let num = isFlipedString(s1,s2)
console.log(num);