// Map 是一个带键的数据项的集合，就像一个 Object 一样。 但是它们最大的差别是 Map 允许任何类型的键（key）。
let map = new Map()

map.set('1','str')
map.set(1,'num')
map.set(true,'bool')

console.log(map);

// Map 的方法和属性
// map.set(key,value)--根据键存储值
// map.get(key)--根据key来返回值，如果map中不存在对应的key则返回undefined
let n = map.get(1)
console.log(n);
// map.has(key)--根据key存在则返回true,否则返回false
let boo = map.has('1')
console.log(boo);
// map.delete(key)--根据Key删除指定的值
// map.clear()--清空map
// map.size--返回当前元素个数