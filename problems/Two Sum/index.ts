// 暴力解法 O(n2)
export function twoSum1(nums: number[], target: number) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  return null
}

// 哈希表
export function twoSum2(nums: number[], target: number) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
  return []
}

//哈希+二分
export function twoSum3(nums: number[], target: number) {
  let map = new Map()
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] + nums[j] === target) {
      return [i, j].sort()
    } else if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i].sort()
    } else if (map.has(target - nums[j])) {
      return [map.get(target - nums[j]), j].sort()
    } else {
      map.set(nums[i], i)
      map.set(nums[j], j)
    }
  }
  return []
}
