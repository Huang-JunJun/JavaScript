/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 * 移除重复节点  编写代码，移除未排序链表中的重复节点。保留最开始出现的节点。
 * 思路：从头节点开始就遍历链表，如果该节点在之后存在相同数据的节点，就删除之后那个相同的节点
 */
 function ListNode(val) {
    this.val = val;
    this.next = null;

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
}

// 使用双重遍历的形式来删除相同的节点
 var removeDuplicateNodes = function(head) {
    // 如果为空就直接返回
    if(head === null) {
        return head
    }
    // 创建两个节点来进行遍历
    let curr_node = new ListNode()

    while(curr_node !== null && curr_node.next !== null) {
        let del_node = curr_node
        while(del_node !== null) {
            if(curr_node.val === del_node.val) {
                // 如果等于就删除该节点指向下下个节点
                del_node.next = del_node.next.next
            } else {
                // 如果不等于就到下一个节点，继续进行遍历
                del_node = del_node.next
            }
        }
        curr_node = curr_node.next
    }

    return head
};

head = [1, 2, 3, 3, 2, 1]

console.log(removeDuplicateNodes(head));