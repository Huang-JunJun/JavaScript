// 优先级队列的封装
function PriorityQueue() {

    function QueueElement(element, priority) {
        this.element = element
        this.priority = priority
    }
    // 封装属性
    this.items = []

    PriorityQueue.prototype.enqueue = (element, priority) => {
        const obj = new QueueElement(element, priority)
        if (this.items.length == 0 || this.items[this.items.length - 1] < obj.priority) {
            this.items.push(obj)
        } else {
            for (let i = 0; i < this.items.length; i++) {
                if (this.items[i].priority > obj.priority) {
                    this.items.splice(i, 0, obj)
                    break
                }
            }
        }
    }
}

let pq = new PriorityQueue()

pq.enqueue('b', 2221)
pq.enqueue('a', 111)
pq.enqueue('b', 233)
pq.enqueue('c', 344)

console.log(pq);