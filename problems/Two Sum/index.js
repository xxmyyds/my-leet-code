// 暴力解法 O(n2)
export function twoSum1() {
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
export function twoSum2() {
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
export function twoSum3() {
  let map = new Map()
  for (let i = 0, j = nums.length - 1; i < nums.length; i++, j--) {
    if (nums[i] + nums[j] === target) {
      return [i, j]
    } else if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else if (map.has(target - nums[j])) {
      return [map.get(target - nums[j]), j]
    } else {
      map.set(nums[i], i)
      map.set(nums[j], j)
    }
  }
  return []
}
