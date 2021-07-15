/**
 * @param {string} s
 * @return {boolean}
 * 回文排列问题
 */
//  var canPermutePalindrome = function(s) {
//     //  只能处理已经排列好的数据，不能处理没有排列的数据
//     let k = s.length -1
//     // 思路：通过从前后分别开始判断索引值，来判断对应的值是否相同
//     for(let i=0;i < s.length;i++) {
//         if((s.lastIndexOf(s[i]) - s.indexOf(s[i]))  == k) {
//             k = k - 2;
//             if(k <= 0) {
//                 return true
//             }
//         } else {
//             return false
//         }
//     }
// };

 var canPermutePalindrome = function(s) {
    //  力扣给的题解 使用的对象暂存方法

    let obj = {};
    for(let i=0; i<s.length; i++){
        console.log(s[i]);
      let char = s[i];
    //   如果对象属性已经存在对象中，就删除，否则将对象属性存为1
      if(obj[char])
        delete obj[char]
      else
        obj[char] = 1;
    }
    return Object.keys(obj).length <= 1;
  };

let s = '15651'
let n = canPermutePalindrome(s)
console.log(n);
