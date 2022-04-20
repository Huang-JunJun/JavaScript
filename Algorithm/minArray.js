// 方法一 暴力法
// 相邻之间相互比较 如果出现右边比左边小的情况则找到边界点
// 如果没有出现这种情况则 下标为0的元素为最小值

const minArray = (numbers) => {
    for (let i = 0; i + 1 < numbers.length; i++) {
        if (numbers[i+1] < numbers[i]) {
            return numbers[i+1]
        }
    }

    return numbers[0]
}

const minArray1 = (numbers) => {
    let left = 0
    let right = numbers.length - 1

    if (left === right) {
        return numbers[0]
    }

    while (right > left) {
        const mid = left + Math.floor((right + left) / 2)
        if (numbers[mid] > numbers[right]) {
            left = mid + 1
        } else if (numbers[mid] < numbers[left]) {
            right = mid - 1
        } else {
            right--
        }
    }

    return numbers[right]
}
const numbers = [1,3,5]
console.log(minArray1(numbers));