import { expect, test, describe } from 'vitest'
import { reverseList } from './index'
describe('Reverse Linked List', () => {
  test('case 1', () => {
    const a: any = { val: 1 }
    const b: any = { val: 2 }
    const c: any = { val: 3 }
    const d: any = { val: 4 }
    const e: any = { val: 5 }
    a.next = b
    b.next = c
    c.next = d
    d.next = e

    let result = []
    let p = reverseList(a)

    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([5, 4, 3, 2, 1])
  })
  test('case 2', () => {
    const a: any = { val: 1 }
    const b: any = { val: 2 }

    a.next = b

    let result = []
    let p = reverseList(a)

    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([2, 1])
  })
  test('case 3', () => {
    let result = []
    let p = reverseList(null)

    while (p) {
      result.push(p.val)
      p = p.next
    }
    expect(result).toEqual([])
  })
})
