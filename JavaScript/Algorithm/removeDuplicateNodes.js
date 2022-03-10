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
}

// 使用双重遍历的形式来删除相同的节点
 var removeDuplicateNodes = function(head) {
    // 如果为空就直接返回
    if(head === null) {
        return head
    }
    // 创建两个节点来进行遍历
    let curr_node = head

    while(curr_node !== null && curr_node.next !== null) {
        let del_node = curr_node
        while(del_node.next !== null) {
            if(curr_node.val === del_node.next.val) {
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