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
  name: '黄显竣',
  a: undefined,
  arr: [1, 2, 3],
  test: function () {
    console.log(this.name);
  }
}

object.arr[0] = 123
// 缺点：不能拷贝undefined和函数
const obj = JSON.parse(JSON.stringify(object))
// 缺点：不能拷贝引用数据类型，类似数组和对象
const obj1 = Object.assign({}, object)
const obj2 = {...object}
const arr = [ object, 1, 2, 3 ]
// 当数组中只含有基本数据类型时map属于深拷贝
const list = arr.map(item => item)
const list2 = arr
const list3 = [].concat(arr)
const list4 = clone(arr)

list2.push('1234')
list4[0].name = 'hxj'
console.log(obj);
console.log(obj1);
console.log(obj2);
console.log(arr);
console.log(list);
console.log(list2);
console.log(list3);
console.log(list4);