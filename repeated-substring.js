/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    const n = s.length;
    
    for (let len = 1; len <= n / 2; len++) {
        if (n % len === 0) {
            const substring = s.slice(0, len);
            let valid = true;
            for (let i = len; i < n; i += len) {
                if (s.slice(i, i + len) !== substring) {
                    valid = false;
                    break;
                }
            }
            if (valid) {
                return true;
            }
        }
    }
    
    return false;
}
