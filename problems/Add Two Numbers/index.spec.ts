import { expect, test, describe } from 'vitest'
import { ListNode, addTwoNumbers } from './index'
describe('Add Two Numbers', () => {
  test('case 1', () => {
    const l1 = new ListNode(2, new ListNode(4, new ListNode(3, null)))
    const l2 = new ListNode(5, new ListNode(6, new ListNode(4, null)))
    let l3 = addTwoNumbers(l1, l2)

    let result = []
    let p = l3
    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([7, 0, 8])
  })

  test('case 2', () => {
    const l1 = new ListNode(0, null)
    const l2 = new ListNode(0, null)
    let l3 = addTwoNumbers(l1, l2)

    let result = []
    let p = l3
    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([0])
  })

  test('case 3', () => {
    const l1 = new ListNode(
      9,
      new ListNode(
        9,
        new ListNode(
          9,
          new ListNode(
            9,
            new ListNode(9, new ListNode(9, new ListNode(9, null)))
          )
        )
      )
    )
    const l2 = new ListNode(
      9,
      new ListNode(9, new ListNode(9, new ListNode(9, null)))
    )
    let l3 = addTwoNumbers(l1, l2)

    let result = []
    let p = l3
    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([8, 9, 9, 9, 0, 0, 0, 1])
  })
})
