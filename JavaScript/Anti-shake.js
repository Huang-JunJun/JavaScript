/*
    防抖与节流
    防抖    防抖为了防止在用户因为多次点击按钮发送同样的请求，从而大大加重服务器压力和影响性能所做的设置。
    防抖通过setTimeout的方式，在一定的时间间隔内，将多次出发变成一次触发。
*/
// let btn = document.getElementById('btn')
// // 点击后触发trigger()函数，第一个参数真是要执行的函数，第二个参数为定时器延迟时间
// btn.addEventListener('click',trigger(real,1000))
// function trigger(fn, dalay) {
//     let time = null
//     return function() {
//         // 如果计时器存在就清空计时器
//         if(time) {
//             clearTimeout(time)
//         }
//         // 设置定时器，规定时间后真实要执行的函数
//         time = setTimeout(() => {
//             fn(...arguments)
//         }, dalay)
//     }
// }
// function real(e) {
//     console.log('huangjunjun');
//     console.log(e);
// }
let btn = document.getElementById('btn')
// 点击后触发trigger()函数，第一个参数真是要执行的函数，第二个参数为定时器延迟时间
btn.addEventListener('click',trigger(real,1000))
function trigger(fn, dalay) {
    let time = null
    return function() {
        let firstClick = !time
        if(firstClick) {
            fn(...arguments)
        }
        // 如果计时器存在就清空计时器
        if(time) {
            clearTimeout(time)
        }
        // 设置定时器，规定时间后真实要执行的函数
        time = setTimeout(() => {
            time = null
        }, dalay)
    }
}
function real(e) {
    console.log('huangjunjun');
    console.log(e);
}

// 节流就是在一个时间段内的减少触发频率

let btn = document.getElementById('btn')
// 点击后触发trigger()函数，第一个参数真是要执行的函数，第二个参数为定时器延迟时间
btn.addEventListener('click',trigger(real,1000))
function trigger(fn, dalay) {
    let bef = 0
    return function() {
        // 获取当前时间
        let now = new Date().getDate()
        if(now - bef > delay) {
            fn(...arguments)
            bef = now
        }
    }
}
function real(e) {
    console.log('huangjunjun');
    console.log(e);
}