export class ListNode {
  public val
  public next
  constructor(val: any, next: any) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
export function addTwoNumbers(l1: ListNode, l2: ListNode) {
  const l3 = new ListNode(0, null)
  let p1 = l1
  let p2 = l2
  let p3 = l3
  let carray = 0
  while (p1 || p2) {
    const v1 = p1 ? p1.val : 0
    const v2 = p2 ? p2.val : 0
    const val = v1 + v2 + carray
    carray = Math.floor(val / 10)
    p3.next = new ListNode(val % 10, null)
    if (p1) p1 = p1.next
    if (p2) p2 = p2.next
    p3 = p3.next
  }

  if (carray) {
    p3.next = new ListNode(carray, null)
  }

  return l3.next
}
