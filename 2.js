/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let stack1 = [], stack2 = [], carry = 0, head = null, res = []
    while (l1) {
        stack1.unshift(l1.val)
        l1 = l1.next
    }
    while (l2) {
        stack2.unshift(l2.val)
        l2 = l2.next
    }

    while (stack1.length || stack2.length || carry) {
        const val1 = stack1.length ? stack1.pop() : 0
        const val2 = stack2.length ? stack2.pop() : 0
        let sum = val1 + val2 + carry
        carry = Math.floor(sum / 10)
        res.push(sum % 10)
    }

    for (let i = res.length - 1; i >= 0; i--) {
        const node = new ListNode(res[i])
        node.next = head
        head = node
    }

    return head
};

// console.log(addTwoNumbers);