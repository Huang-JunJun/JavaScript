/**
 * @param {string} S
 * @return {string}
 */
// 思路：前一个字符与后一个字符进行比较，使用一个sum来记录次数。如果相同就继续比较且sum++，如果不同就将sum和当前字符放入数组
// 最后比较两个数组长度返回相应的结果
 var compressString = function(S) {
    // 新建一个数组来存放字符
    let arr = []
    // 新建一个新数组来存放
    let newArr = []
    let sum = 1;
    // 将字符串中的字符存入数组
    for (let i = 0; i < S.length; i++) {
        arr[i] = S.charAt(i)
    }

    for (let i = 0; i < arr.length; i++) {
        // sum 记录次数
        if(arr[i] == arr[i+1]){
            sum++
        } else {
            newArr.push(arr[i])
            newArr.push(sum)
            sum = 1;
        }
    }

    if(newArr.length >= arr.length) {
        return S
    } else {
        return newArr.join('')
    }
};

let s = "aabcccccaaa"

console.log(compressString(s));