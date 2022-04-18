const foo=function(m){
    let sum=m
    return function(n){
        if(n>0){
            sum+=n
        }
        console.log(sum)
    }
}

const f=foo(1)
f(2);
foo(0)(2)
const obj={sum:4};
f.call(obj, 2)

// f = foo(1) 可以看成 f = function(n){
//     let sum = 1
//       if(n>0){
//           sum+=n
//       }
//       console.log(sum)
//   }
// 所以f(2) = 3
// foo(0)(2)的意思是sum = 0 回调函数中的n为2
// 所以foo(0)(2) = 2
// f.call(obj, 2)因为闭包的原理，之前f(2)调用了一次内部函数，所以使用之前留下的sum = 3，带入函数中sum = 3，n=2，返回5。