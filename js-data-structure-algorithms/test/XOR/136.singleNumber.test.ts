import { singleNumber } from '../../src/LeetCode/XOR/136.singleNumber';

describe('136.只出现一次的数字', () => {
  test('测试用例1', () => {
    expect(singleNumber([2, 2, 1])).toBe(1);
  });
  test('测试用例2', () => {
    expect(singleNumber([4, 1, 2, 1, 2])).toBe(4);
  });
});