function person(a, b, c, d) {
    return {
        name: this.name,
        a: a,
        b: b,
        c: c,
        d: d
    }
}

const egg = {
    name: '小蛋',
}

Function.prototype.newCall = function(obj, ...arguments) {
    const obj = obj || window
    obj.p = this
    const newArguments = []
    for (let i = 0; i < arguments.length; i++) {
        newArguments.push(arguments[i])
    }
    const result = obj.p(...newArguments)
    delete obj.p

    return result
}

Function.prototype.newApply = function(obj, arr) {
    const obj = obj || window
    obj.p = this
    if (!arr) {
        return obj.p()
    } else {
        for (let i = 0; i < arr.length; i++) {
            newArguments.push(arr[i])
        }
        const result = obj.p(...newArguments)
        delete obj.p
    
        return result
    }
}

const bibi = person.newCall(egg, ['点赞','点赞','点赞','点赞'])
console.log(bibi);