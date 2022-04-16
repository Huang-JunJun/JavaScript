const slow = (x) => {
    console.log(x);

    return x
}

const cachingDecorator = (func) => {
    let cache = new Map()

    return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }

        cache.set(x, func(x))

        return func(x)
    }
}