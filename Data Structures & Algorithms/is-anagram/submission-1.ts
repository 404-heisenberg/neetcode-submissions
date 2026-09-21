class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
            // create hashmaps for each string, where a store each letter and the number of times it occures
    const sCount: { [key: string]: number } = {};
    const tCount: { [key: string]: number } = {};

    // if the two strings aren't the same length, we know that they can't be an anagram
    if (s.length !== t.length) return false;

    // loop through each string, adding new letters and tracking their count
    for (let i = 0; i < s.length; i++) {
      // when we encounter a letter for the first time, we set it's defualt value to 0
      sCount[s[i]] = (sCount[s[i]] || 0) + 1;
      tCount[t[i]] = (tCount[t[i]] || 0) + 1;
    }

    // because for an anagram the two hashmaps will be identical, we can loop through just the one hashmap and ensure that the counts are identical on the other hashmap
    for (const key in sCount) {
      if (sCount[key] !== tCount[key]) return false;
    }

    return true;

    }
}
