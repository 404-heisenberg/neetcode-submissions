class Solution {
    public boolean isPalindrome(String s) {
         // create two pointers
        int l = 0, r = s.length() - 1;

       while(l < r) {
           // increment right & left pointer when not pointing at a alphanumeric character
           while (l < r && !isAlphaNum(s.charAt(l))) l++;
           while (l < r && !isAlphaNum(s.charAt(r))) r--;

           // return false when the pointers aren't matching characters
           if (Character.toLowerCase(s.charAt(l)) != Character.toLowerCase(s.charAt(r))) {
               return false;
           }

           l++;
           r--;
       }

       return true;
    }

     public boolean isAlphaNum(char c) {
        return ('0' <= c && c <= '9' ||
                'a' <= c && c <= 'z' ||
                'A' <= c && c <= 'Z');
    }
}
