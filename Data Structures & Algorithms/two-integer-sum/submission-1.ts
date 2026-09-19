class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let prevMap: Map<number, number> = new Map();
        for (let i = 0; i < nums.length; i++) {
            let diff: number = target - nums[i];
            if (prevMap.has(diff)) {
                return [prevMap.get(diff), i];
            }
            prevMap.set(nums[i], i);
        }
        return [];
    }
}
