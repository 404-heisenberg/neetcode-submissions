class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let front: number = 0;
        let back: number = s.length - 1;

        while (front < back) {
            while (front < back && !isAlphanumeric(s[front])) front++;
            while (back > front && !isAlphanumeric(s[back])) back--;

            if (s[front].toLowerCase() != s[back].toLowerCase()) {
                return false;
            }

            front++;
            back--;
        }

        return true;
    }
    
}

function isAlphanumeric(c: string): boolean {
    return ('A' <= c && c <= 'Z') ||
        ('a' <= c && c <= 'z') ||
        ('0' <= c && c <= '9');
}
