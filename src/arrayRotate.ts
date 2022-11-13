/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  for (let i = 0; i < k; i++) {
    const pop = nums.pop();
    if (pop !== undefined) nums.unshift(pop);
  }
}

rotate([2147483647, -2147483648, 33, 219, 0], 4);
