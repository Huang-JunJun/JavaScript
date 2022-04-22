
//   Definition for singly-linked list.
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 * 删除链表节点
 */
 var deleteNode = function(head, val) {
  let node = head

  while(node) {
    if (node.val === val && node.next != null) {
      node.val = node.next.val
      node.next = node.next.next
    } else {
      node = node.next
    }
  }

  return head
};