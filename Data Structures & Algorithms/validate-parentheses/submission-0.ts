class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
       const closedToOpen: {[key: string] : string} = {
            '}' : '{',
            ')' : '(',
            ']' : '['
        };
        const stack: string[] = [];

        for (const c of s) {
            if (closedToOpen[c]) {
                if (stack.length !== 0 && 
                    stack[stack.length - 1] === closedToOpen[c]) {
                    stack.pop();
                } else {
                    return false;
                }
            } else {
                stack.push(c);
            }
        }

        return stack.length === 0;
    }
}
