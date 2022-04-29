// 链表结构
function LinkList() {
    // 节点类
    function Node(val) {
        this.val = val
        this.next = null
    }

    this.head = null
    this.length = 0

    LinkList.prototype.append = (element) => {
        const node = new Node(element)
        if (this.length === 0) {
            this.length++
           return this.head = node
        }

        let curNode = this.head
        while(curNode.next) {
            curNode = curNode.next
        }

        curNode.next = node
        this.length++
    }

    LinkList.prototype.insert = (element, index) => {
        if (index < 0) return;

        if(this.head === null) {
            if (!index) {
                this.length++
                return this.head = element
            } else {
                return
            }
        }

        const node = new Node(element)
        let curNode = this.head
        let preNode = this.head.next
        let pos = 0

        while(preNode.next) {
            if (pos == index) {
                curNode.next = node
                node.next = preNode
                break
            }
            curNode = preNode
            preNode = preNode.next
            pos++
        }

        this.length++
    }

    LinkList.prototype.indexOf = (index) => {
        let curNode = this.head
        let curIndex = 0
        if(this.length === 0) {
            return this.head
        } else {
            while (curNode.next) {
                if (curIndex === index) {
                    return curNode
                }
                curIndex++
                curNode = curNode.next
            }
        }
    }

    LinkList.prototype.delete = (index) => {
        let curNode = this.head
        let curIndex = 0
        if(this.length === 0) {
            return
        } else {
            while (curNode.next) {
                if (curIndex === index - 1) {
                    curNode.next = curNode.next.next
                    this.length--
                    break
                }
                curIndex++
                preNode = curNode
                curNode = curNode.next
            }
        }
    }
}

const list = new LinkList()

list.append('123')
list.append('456')
list.append('789')

list.insert('1010', 0)

console.log(list);
console.log(list.indexOf(1));
list.delete(1)
console.log(list);
