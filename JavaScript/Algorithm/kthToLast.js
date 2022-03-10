/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {number}
 * 返回倒数第 k 个节点  实现一种算法，找出单向链表中倒数第 k 个节点。返回该节点的值。
 * 实现思路：先反转链表，再 next 同时计数，next 个数达到 k，直接返回
 */
function LinkList(data) {
    this.data = data
    this.next = null
}

 var kthToLast = function(head, k) {
    let pre = null;
    let cur = head;
    let count = 0;

    while(cur) {
        const next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }

    while(pre) {
        count++;
        if(count === k) {
        return pre.val;
        }
        pre = pre.next;
    }
};