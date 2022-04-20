import { expect, test, describe } from 'vitest'
import { isValid } from './index'
describe('Valid Parentheses', () => {
  test('case 1', () => {
    const str = '()'
    expect(isValid(str)).toBe(true)
  })
  test('case 2', () => {
    const str = '()[]{}'
    expect(isValid(str)).toBe(true)
  })
  test('case 3', () => {
    const str = '(]'
    expect(isValid(str)).toBe(false)
  })
  test('case 4', () => {
    const str = '([)]'
    expect(isValid(str)).toBe(false)
  })
  test('case 5', () => {
    const str = '{[]}'
    expect(isValid(str)).toBe(true)
  })
})
