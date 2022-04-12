const lastRemaining = (n, m) => {
    const arr = []
    for (let i = 0; i <= n; i++) {
        arr.push(i)
    }

    if (arr.length === 1) {
        return arr[0]
    } else {
        arr.splice(m, 1)
        const newArr = []
        for (let i = m; i < arr.length; i++) {
            if (i === arr.length - 1) {
                i === 
            }
            
            newArr.push(arr[i])
        }
    }
}