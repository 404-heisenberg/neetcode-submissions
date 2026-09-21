class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const numbers: {[key: number] : number} = {};

        for (let i = 0; i < nums.length; i++) {
            const diff = target - nums[i];

            if (numbers[diff] != undefined) {
                return [numbers[diff], i];
            }

            numbers[nums[i]] = i;
        }
        
        return [];
    }
}
