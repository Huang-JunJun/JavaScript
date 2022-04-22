const reverseList = (head) => {
    let pre = null 
    let cur = head
    while(cur) {
        let tmp = cur.next
        cur.next = pre
        per = cur
        cur = tmp
    }

    return pre
}