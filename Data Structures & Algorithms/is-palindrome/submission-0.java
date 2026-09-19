class Solution {
    public boolean isPalindrome(String s) {
        // make string lowercase
        s = s.toLowerCase();
        // remove spaces from string
        s = s.replaceAll("\\s", "");
        // remove all punctuation from string
        s = s.replaceAll("\\p{Punct}", "");
        // loop through string, check the current character of the string
        for (int i = 0; i < s.length(); i++){
            char front = s.charAt(i);
            // go to the end of the string and check if the character matches
            int j = s.length() - 1 - i;
            char back = s.charAt(j);

            if (front != back) return false;
        }
        return true;
    }
}
