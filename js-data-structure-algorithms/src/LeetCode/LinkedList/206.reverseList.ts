// 反转链表

import { TCycle } from './types'

/**
 * 1,2,3,4,5 => 5,4,3,2,1
 */
function reverseList(head: TCycle): TCycle {

  if (!head || !head.next) return null;

  let prev: TCycle = null
  let curr: TCycle = head

  while (curr) {
    let temp = curr.next
    curr.next = prev
    prev = curr
    curr = temp
  }

  return prev
};

// 递归解法
function reverseList2(head: TCycle): TCycle {

  if (!head || !head.next) return head;

  let prev: TCycle = head
  let tail: TCycle = head.next

  let p = reverseList2(head.next)

  prev.next = null
  tail.next = prev

  return p
};