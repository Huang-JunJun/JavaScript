// 队列的封装
function Queue(array) {
    
    this.items = array

    // 添加元素
    Queue.prototype.enqueue = (element) =>{
        this.items.push(element)
    }

    // 删除第一个元素
    Queue.prototype.dequeue = () => {
        return this.items.shift()
    }

    // 返回第一个元素
    Queue.prototype.front = () => {
        return this.items[0]
    }

    // 判断是否为空
    Queue.prototype.isEmpty = () => {
        return this.items.length === 0
    }

    // 返回队列长度
    Queue.prototype.size = () => {
        return this.items.length
    }

    // 所有元素转为字符串形式
    Queue.prototype.toString = () => {
        for (let i = 0; i < this.items.length; i++) {
            this.items[i] = `${this.items[i]}`
        }

        return this.items
    }
}

export default Queue