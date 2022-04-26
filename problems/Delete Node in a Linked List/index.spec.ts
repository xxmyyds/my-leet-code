import { expect, test, describe } from 'vitest'
import { deleteNode } from './index'
describe('Delete Node in a Linked List', () => {
  test('case 1', () => {
    // 创建 LinkedList
    const a: any = { val: 4 }
    const b: any = { val: 5 }
    const c: any = { val: 1 }
    const d: any = { val: 9 }
    a.next = b
    b.next = c
    c.next = d
    deleteNode(b)
    let result = []
    let p = a
    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([4, 1, 9])
  })
  test('case 2', () => {
    // 创建 LinkedList
    const a: any = { val: 4 }
    const b: any = { val: 5 }
    const c: any = { val: 1 }
    const d: any = { val: 9 }
    a.next = b
    b.next = c
    c.next = d
    deleteNode(c)
    let result = []
    let p = a
    while (p) {
      result.push(p.val)
      p = p.next
    }

    expect(result).toEqual([4, 5, 9])
  })
})
