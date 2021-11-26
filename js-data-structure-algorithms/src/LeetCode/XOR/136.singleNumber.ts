// 只出现一次的数字
export function singleNumber(nums: number[]): number {
  return nums.reduce((prev, curr) => prev ^ curr)
}