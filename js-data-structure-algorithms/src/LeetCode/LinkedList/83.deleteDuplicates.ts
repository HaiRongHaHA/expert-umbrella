//  删除排序链表中的重复元素

import { TCycle } from './types'

function deleteDuplicates(head: TCycle): TCycle {
  if (!head || head.next === null) return head
  let curr = head
  while (curr.next !== null) {
    if (curr.val === curr.next.val) {
      curr.next = curr.next.next
    } else {
      curr = curr.next
    }
  }
  return head
};