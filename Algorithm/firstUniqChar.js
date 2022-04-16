/**
 * @param {string} s
 * @return {character}
 * 第一个只出现一次的字符
 * 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

    示例:
    s = "abaccdeff"
    返回 "b"
    s = "" 
    返回 " "
 */
 var firstUniqChar = function(s) {
    let str

    for(let i=0;i < s.length;i++) {
        str = s.charAt(i)
        if(s.indexOf(str) === s.lastIndexOf(str)) {
            return str
        }
    }
    str = ' '

    return str
};

let s = ""
console.log(firstUniqChar(s));