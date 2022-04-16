/**
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function(nums) {
    const arr = []
    const arr2 = []

    nums.forEach(item => {
        if (item % 2 === 0) {
            arr2.push(item)
        } else {
            arr.push(item)
        }
    })

    return arr.concat(arr2)
};

const nums = [1,2,3,4]

console.log(exchange(nums));