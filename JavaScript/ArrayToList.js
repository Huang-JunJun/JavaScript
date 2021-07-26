/* 
    数据转换成链表
*/

// 链表生成函数
function LinkList(data) {
    this.data = data
    this.next = null
}

// 数组转化成链表函数
let node = new LinkList()

function arrayToList(array) {
    // 数组为空 返回Null
    if(!array.length) return null

    let head = new LinkList(array[0])
    let node = head
    for(let i = 1; i < array.length; i++ ) {
        node.next = new LinkList(array[i])
        node = node.next
    }

    return head
}

let arr = [1,2,3,4,5,6,7,8,9,10]

console.log(arrayToList(arr));