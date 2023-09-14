/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // Convert to lowercase and remove non-alphanumeric characters
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');

    // Check if the string is a palindrome
    return s === s.split('').reverse().join('');
};
