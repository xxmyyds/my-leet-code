import { expect, test, describe } from 'vitest'
import { twoSum1, twoSum2, twoSum3 } from './index'
describe('two sum', () => {
  test('case 1', () => {
    const nums = [2, 7, 11, 15]
    const target = 9
    expect(twoSum1(nums, target)).toEqual([0, 1])
    expect(twoSum2(nums, target)).toEqual([0, 1])
    expect(twoSum3(nums, target)).toEqual([0, 1])
  })
  test('case 2', () => {
    const nums = [3, 2, 4]
    const target = 6
    expect(twoSum1(nums, target)).toEqual([1, 2])
    expect(twoSum2(nums, target)).toEqual([1, 2])
    expect(twoSum3(nums, target)).toEqual([1, 2])
  })
  test('case 3', () => {
    const nums = [3, 3]
    const target = 6
    expect(twoSum1(nums, target)).toEqual([0, 1])
    expect(twoSum2(nums, target)).toEqual([0, 1])
    expect(twoSum3(nums, target)).toEqual([0, 1])
  })
})
