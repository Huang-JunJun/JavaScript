// 深拷贝
function clone(target) {
    if (typeof target === 'object') {
        let cloneTarget = Array.isArray(target) ? [] : {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
};

const object = {
    name: '黄显竣'
}

const arr = [ object, 1, 2, 3 ]
const list = arr.map(item => item)
const list2 = arr
const list3 = [].concat(arr)
const list4 = clone(arr)

list2.push('1234')
list4[0].name = 'hxj'
console.log(arr);
console.log(list);
console.log(list2);
console.log(list3);
console.log(list4);