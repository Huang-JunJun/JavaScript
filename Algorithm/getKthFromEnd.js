const getKthFromEnd = (head, k) => {
    let node = head
    let length = 0

    while(node != null) {
        length++
        node = node.next
    }

    node = head
    for (let i = 1; i <= length; i++) {
        if (length - i == k) {
            return node.next
        }
        node = node.next
    }
    return head
}

const head = [1,2,3,4,5]


console.log(getKthFromEnd2(head, 2));