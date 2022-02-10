/**
 * @param {number} A
 * @param {number} B
 * @return {number}
 * 不使用*实现乘法
 * 暴力解法：比较AB大小，哪个数小就以哪个数为次数，使另一个数加相应的次数
 */
//  var multiply = function(A, B) {
//     if(A > B) {
//         let b = B
//         for(let i=1; i < A; i++) {
//             B = B + b
//         }
//         return B
//     } else {
//         let a = A
//         for(let i=1; i < B; i++) {
//             A = A + a
//         }
//         return A
//     }
// };
// 递归解法，同样使用到了哪个小就进行多少次数，效率提升
var multiply = function(A, B) {
    if(A == 0 || B == 0) {
        return 0
    } else {
        if(A > B) {
            A = A + multiply(A,B-1)
            return A
        } else {
            B = B + multiply(A-1,B)
            return B
        }
    }
    // if(A ==0||B==0){
    //     return 0
    // }
    // if(A<B){
    //     return  B + multiply(A-1,B)
    // }
    // return  A + multiply(A,B-1)
};

let A = 3,B = 4
multiply(A,B)
console.log(multiply(3,4));