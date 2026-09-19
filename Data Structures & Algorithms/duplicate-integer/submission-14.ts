class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums: number[]): boolean {
    // set of unique numbers
    const uniqueNums = new Set();

    for (let num of nums) {
      // if the number is already in the set, return true
      if (uniqueNums.has(num)) {
        return true;
      }
      uniqueNums.add(num);
    }
    return false;
  }
}

