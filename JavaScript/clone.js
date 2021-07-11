// 浅拷贝与深拷贝
// 浅拷贝与深拷贝的区别是浅拷贝只拷贝了一层，深层次的对象就拷贝引用；而深拷贝是拷贝了更深一层，每一级别的数据都会被拷贝出来

function simpleClone(obj) {
    // 浅拷贝的实现
    let newObj = {}

    for(let i in obj) {
        // 直接赋值
        newObj[i] = obj[i]
    }

    return newObj
}

function deepClone(obj) {
    let newObj = {}

    for(let key in obj) {
        // 循环对象，如果循环的依然是一个对象就给一个对象
        if(typeof obj[key] == 'object') {
            newObj[key] = {}
            for(let i in obj[key]) {
                newObj[key][i] = obj[key][i]
            }
        } else {
            newObj[key] = obj[key]
        }
    }

    return newObj
}

let obj = {
    a: "hello",
    b:{
        a: "world",
        b: 21
    },
    c:["Bob", "Tom", "Jenny"],
    d:function() {
        alert("hello world");
    }
}

// 浅拷贝出的对象会随着原对象的修改进行修改，深拷贝出的对象不会。
console.log(simpleClone(obj));
console.log(deepClone(obj));