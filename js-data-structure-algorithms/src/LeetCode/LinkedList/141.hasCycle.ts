// 判断链表是否有环

import { TCycle } from './types'

/**
 * 快慢指针
 *
 * 3-2-0-4 | 4->2
 * slow: 3 2 0 4
 * fast: 2 0 2 4
 * res: true
 *
 * 3-2-0-4 | 4->3
 * slow: 3 2 0 4 3
 * fast: 2 0 3 0 3
 * res: true
 *
 * 3-2-0-4
 * slow: 3 2
 * fast: 2 4
 * res: false
 */
function hasCycle(head: TCycle): boolean {
  if (!head) return false

  let slow: TCycle = head
  let fast: TCycle = head.next

  while (slow !== fast && fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  return slow === fast
}

// 快慢指针之间相隔几步，快指针就会在几步之内追上慢指针
