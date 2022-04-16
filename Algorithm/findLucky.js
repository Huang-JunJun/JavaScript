const findLucky = (arr) => {
    const setArr = Array.from(new Set(arr)).sort((a, b) => a - b)
    console.log(setArr);
    for (let i = 0; i < setArr.length; i++) {
        let count = 0
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === setArr[i]) {
                count++
            }
        }
        
        if (count > setArr[i] || count !== setArr[i]) {
            setArr.splice(i, 1)
            i = i - 1
        }
    }
    console.log(setArr);
    return setArr.length ? setArr[setArr.length - 1] : -1
}
const arr = [5,8,10,9,8,10,9,6,6,7,10,8,10,10,9,4,6,2,10,3,5,10,2,6,4,8,7,3,9,9,5,7,8,7,11,9,3,1,5,11,9,5,8,10,8,4,9,7,6,7,10,9,7,8,6,10,4]
console.log(findLucky(arr));