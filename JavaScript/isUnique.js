/**
 * @param {string} astr
 * @return {boolean}
 */
function isUnique(astr) {
    let arr = []
    let result = true;
    
    for(let i = 0; i < astr.length;i++) {
        // 取出字符串中的所有字符放入数组中
        arr.push(astr.charAt(i))
    }
    // 遍历比较整个数组，如果有相同的数字就使result赋值成false
    for(let j = 0; j < arr.length;j++) {
        for(let k = j+1; k < arr.length;k++) {
            if(arr[j] == arr[k]){
                result = false
            }
        }
    }

    return result
};

function isUnique(astr) {
    // 第二种方法 不使用其他数据结构
    for(let i = 0;i < astr.length; i++ ) {
        // 如果这个索引值不与最后索引值都不相等（等于1）的话 就说明存在相同的字符
        if(astr.indexOf(astr[i]) != astr.lastIndexOf(astr[i])) {
            return false
        }
    }

    return true
};