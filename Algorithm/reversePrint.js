/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
const reversePrint = function(head) {
    let nums = []
    let node = head
    //遍历链表
    while(node !== null) {
        nums.unshift(node.val)
        node = node.next
    }
    return nums
};

const head = [1,3,2]
console.log(reversePrint(head));