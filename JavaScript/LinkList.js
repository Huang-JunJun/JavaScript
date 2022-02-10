/* 
    链表的实现
*/
// 定义链表类
function LinkList() {
    // 定义节点
    let node = function(data) {
        this.data = data
        this.next = null
    }
    
    let length = 0 // 链表长度
    let head = null // 头节点
    let tail = null // 尾节点

    /* 
        链表的方法：
        append， 添加一个新的元素
        insert，在指定位置插入一个元素
        remove，删除指定位置的节点
        get，返回指定索引位置的元素
        print，打印整个链表
    */

    // append 每次append，都要先创建一个node节点，如果列表为空，则让head和tail指向这个新创建的节点
    // 如果列表不为空，则tail.next = node， 并让tail指向node
    this.append = (data) => {
        // 创建一个新的节点
        let new_node = new Node(data)

        if(head === null) {
            head = new_node
            tail = head
        } else {
            tail.next = new_node
            tail = new_node
        }
        length++
        return new_node
    }

    this.insert = (index,data) => {
        // index为无效值
        if(index < 0 || index > length) return false
        // index = length就是append
        if(index == length) {
            return this.append(data)
        } else {
            // 新建节点
            let new_node = new Node()
            if(index == 0) {
                // 新插入的元素成为头节点
                new_node.next = head
                head = new_node
            } else {
                // 既然不是头节点，那就是从1开始往后找，找到插入位子
                let insert_index = 1
                let curr_node = head
                while(insert_index < index) {
                    insert_index++
                    curr_node = curr_node.next
                }
                // 当寻找到当前节点时记录下当前节点的下一个节点
                let next_node = curr_node.next
                curr_node.next = new_node // 把当前节点的下一个节点替换成新节点
                new_node.next = next_node // 新节点的下一个节点赋值成原来的下一个节点
            }
        }
        length++
        return true
    }

    // 和insert一样，需要传入索引值index，且判断索引值是否有效
    this.remove = (index) => {
        if(index < 0 || index > length) return false
        if(index == 0) {
            // 这一步是将头指针指向下一个节点
            let del_node = head
            head = head.next
            del_node = null
        } else {
            // 当索引值有效且不为0时 需要找到要删除的前一个节点和删除节点
            let del_index = 0
            let pre_node = null
            let curr_node = head
            while(del_index < index) {
                // 先进行了++ 返回的del_index就是需要删除节点的索引值 得到的当前节点就是需要删除节点
                del_index++
                curr_node = curr_node.next
            }
            let del_node = curr_node // 当前节点为删除节点
            pre_node.next = del_node.next   // 上一个节点的指针指向删除节点的下一个节点
            del_node.next = null // 删除节点的指针指向空
            if(curr_node.next === null) { // 如果删除节点是尾节点
                tail_node = pre_node
            }
        }
        length--
        return true
    }

    // 打印节点
    this.print = () => {
        let curr_node = head
        while (curr_node) {
            console.log(curr_node);
            curr_node = curr_node.next
        }
    }

    // 返回指定位置节点
    this.get = (index) => {
        if (index>=length || index<0) return false

        let node_index = 0
        let curr_node = head

        while (node_index < index) {
            node_index++
            curr_node = curr_node.next
        }
        return curr_node.data
    }
}