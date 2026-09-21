class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
    const s1: string = s.split('').sort().join();
    const t1: string = t.split('').sort().join();

    return (s1 === t1);
    }
}
