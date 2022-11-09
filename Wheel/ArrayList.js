function ArrayList() {
  this.array = []

  ArrayList.prototype.insert = function(item){
    this.array.push(item)
  }

  ArrayList.prototype.toString = function(){
    return this.array.join('-')
  }

  ArrayList.prototype.bubbleSort = function(){
    for (let i = 0; i < this.array.length-1; i++) {
      for (let j = 0; j < this.array.length-i-1; j++) {
        if(this.array[j] > this.array[j+1]){
          let tmp = this.array[j]
          this.array[j] = this.array[j+1]
          this.array[j+1] = tmp
        }
      }
    }

    return this.array
  }

  // 选择排序
  ArrayList.prototype.selectionSort = function(){
    let indexMin
    for (let i = 0; i < this.array.length-1; i++) {
      indexMin = i
      for (let j = i+1; j < this.array.length; j++) {
        if(this.array[indexMin] > this.array[j]) {
          let tmp = this.array[j]
          this.array[j] = this.array[indexMin]
          this.array[indexMin] = tmp
        }
      }
    }

    return this.array
  }

  // 插入排序
  ArrayList.prototype.insertionSort = function(){
    const  { length } = this.array
    let tmp
    // 从第一个位置开始获取数据，向签名局部有序进行插入
    for (let i = 1; i < length; i++) {
      // 获取i位置的元素,和前面的数据依次进行比较
      j = i
      tmp = this.array[i]
      while(this.array[i] < this.array[j-1] && j > 0){
        this.array[j] = this.array[j-1]
        j--
      }
      this.array[j] = tmp
    }

    return this.array
  }

  // 希尔排序
  ArrayList.prototype.shellSort = function(){
    const  { length } = this.array
    const gap = Math.floor(length / 2)

    // while循环 gap不断减小
    while(gap >= 1) {
      // 以gap为间隔进行分组排序
      for (let i = gap; i < length; i++) {
        // 获取i位置的元素,和前面的数据依次进行比较
        let j = i
        let tmp = this.array[i]
        while(tmp < this.array[j-gap] && j > 0){
          this.array[j] = this.array[j-gap]
          j = j - gap
        }
        this.array[j] = tmp
      }
      gap = Math.floor(gap / 2)
    }

    return this.array
  }
}

let list = new ArrayList()

list.insert(78)
list.insert(123)
list.insert(723)
list.insert(75)
list.insert(38)
list.insert(28)
list.selectionSort()
console.log(list);