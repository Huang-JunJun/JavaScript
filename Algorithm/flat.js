
let newArr = []
function flat(val) {
    // 递归函数newArr的创建不能放在函数中
    for(let i in val) {
        // 判断是否为数组，如果为数组就进行递归
        if(Array.isArray(val[i])){
            flat(val[i])
        } else {
            // 不是数组就向新数组中push
            newArr.push(val[i])
        }
    }

    return newArr
}

const arr = [1, 'a', false,[2,'3',{ b : 4 }],[5,[6]]]

newArr = flat(arr)
console.log(newArr);