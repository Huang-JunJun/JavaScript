let arr = [
  {
    name: '张三',
    age: 23
  },
  {
    name: '李四',
    age: 23
  },
  {
    name: '王五',
    age: 23
  },
]
// for...in key返回的是数组的下标
for (const key in arr) {
  console.log(key)
}
// for...in key返回的是数组的值
for (const key of arr) {
  console.log(key)
}

let range = {
  from: 1,
  to: 5
};

// 1. for..of 调用首先会调用这个：
range[Symbol.iterator] = function() {

  // ……它返回迭代器对象（iterator object）：
  // 2. 接下来，for..of 仅与下面的迭代器对象一起工作，要求它提供下一个值
  return {
    current: this.from,
    last: this.to,

    // 3. next() 在 for..of 的每一轮循环迭代中被调用
    next() {
      // 4. 它将会返回 {done:.., value :...} 格式的对象
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
};

for (let key of range) {
  console.log(key)
}