const countGoodRectangles = (rectangles) => {
    const obj = {}

    rectangles.forEach(item => {
        if (item[0] <= item[1]) {
            if (obj[item[0]]) {
                ++obj[item[0]]
            } else {
                obj[item[0]] = 1
            }
        } else {
            if (obj[item[1]]) {
                ++obj[item[1]]
            } else {
                obj[item[1]] = 1
            }
        }
    })

    let maxNum = 0
    for (const key in obj) {
        if (key > maxNum) {
            maxNum = key
        }
    }

    return obj[maxNum]
};

const countGoodRectangles2 = (rectangles) => {
    let res = 0
    let maxLen = 0

    rectangles.forEach(item => {
        const l = item[0]
        const w = item[1]
        const k = Math.min(l, w)
        if (k === maxLen) {
            res++
        } else if (k > maxLen) {
            res = 1
            maxLen = k
        }
    })

    return res
};

const rectangles = [[5,8],[3,9],[3,12]]

console.log(countGoodRectangles(rectangles));