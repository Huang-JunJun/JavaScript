/* 
  需要在一次循环中多次删除数组元素
*/

/* 
  方法一 逆向循环
*/
let arr = [1,2,3,4,5,6,7,8,9,10]
let arrList = [1,2,3,4,5]

// for (let i = arr.length; i >= 0; i--) {
//   for (let j = 0; j < arrList.length; j++) {
//     if (arr[i] === arrList[j]) {
//       arr.splice(i, 1)
//     }
//   }
// }

/* 
  方法二 使用filter过滤
*/
// arrList.forEach((item) =>{
//   arr = arr.filter((i) => i !== item)
// })

/* 
  方法三 使用新数组接收不需要删除的元素，在重新赋值旧数组
*/
console.log(arr)