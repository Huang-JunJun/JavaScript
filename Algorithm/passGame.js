import Queue from "../DataStructure/Queue.js"

const passGame = (arr, num) => {
    const queue = new Queue(arr)
    let length = queue.size()
    let count = num - 1
    while(length != 1) {
        for (let i = 1; i <= count; i++) {
            queue.enqueue(queue.items[0])
            queue.dequeue()
        }
        queue.dequeue()
        length = queue.size()
    }

    return queue
}

const arr = [1, 2, 3, 4, 5]
console.log(passGame(arr, 3));