// 数组去重

// 暴力去重法
function ArrayIsUnique (array) {
    if (!Array.isArray(array)) return;

    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) {
                array.splice(j, 1)
                j--
            }
        }
    }

    return array
}

// Set方法去重
function ArrayIsUnique2 (array) {
    if (!Array.isArray(array)) return;

    const map = new Set(array)

    return Array.from(map)
}

// Map方法去重
function ArrayIsUnique3 (array) {
    if (!Array.isArray(array)) return;

    const map = new Map()
    array.forEach(item => map.set(item, item))

    return Array.from(map.values())
}

// 先排序再去重
function ArrayIsUnique4 (array) {
    if (!Array.isArray(array)) return;
    
    array.sort()
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] === array[i + 1]) {
            array.splice(i, 1)
        }
    }

    return array
}

// 定义一个新数组 如果没有就存进去
function ArrayIsUnique5 (array) {
    if (!Array.isArray(array)) return;

    const arr = []

    array.forEach(item => {
        if (arr.indexOf(item) === -1) {
            arr.push(item)
        }
    })

    return arr
}
 
// 使用includes方法
function ArrayIsUnique6 (array) {
    if (!Array.isArray(array)) return;

    const arr = []

    array.forEach(item => {
        if (!arr.includes(item)) {
            arr.push(item)
        }
    })

    return arr
}

// 使用filter方法
function ArrayIsUnique7 (array) {
    if (!Array.isArray(array)) return;

    let arr = array.map(item => item)

    array.forEach(item => {
        arr = arr.filter(i => item !== i)
        arr.push(item)
    })

    return arr
}

const arr = []
const array=[1,2,2,2,3,4,4,5,6,6,6] 

console.log(Array.isArray(arr));

console.log(ArrayIsUnique(array));