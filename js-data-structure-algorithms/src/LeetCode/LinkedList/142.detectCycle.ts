// 链表有环，返回环的第一位，否则返回null

// 弗洛伊德算法

import { TCycle } from './types'

/**
 * 快慢指针
 * 3-2-0-4 | 4->2
 * slow: 3 2 0 4
 * fast: 2 0 2 4
 * 有环：
 * slow: 3 2
 * fast: 4 2
 */
function detectCycle(head: TCycle): TCycle {
  if (!head || !head.next) return null

  let slow: TCycle = head.next
  let fast: TCycle = head.next.next

  while (slow !== fast && fast && fast.next) {
    slow = slow!.next
    fast = fast.next.next
  }

  if (slow !== fast) return null

  slow = head
  while (slow !== fast) {
    slow = slow!.next
    fast = fast!.next
  }

  return slow
}

/*
 2(a+x) = (a+x) + n(x+y)

 根据慢指针步数得到的快指针走的步数
 2(a+x)
    a+x 慢指针走的步数
    2(a+x) 慢指针走的步数x2就是快指针走得步数
（x2因为快指针比慢指针多走2步，所以是2倍）

 快指针本身走的步数
 (a+x) + n(x+y)
    n是因为走了n圈

 2(a+x) = (a+x) + n(x+y)
  a+x = n(x+y)
  a=y (快慢指针相遇时)
为什么a=y，这是一种数学思想：n取任意值，这里n取0）

 当快慢指针相遇时，让慢指针回到起点，快指针还在相遇点，
 然后快慢指针同时都走一步，等他们再相遇时，就是环开始的地方。
 */
