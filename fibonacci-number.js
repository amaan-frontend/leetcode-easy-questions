/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    if (n <= 1) {
        return n;
    }

    let fibNMinus2 = 0;
    let fibNMinus1 = 1;
    let fibN = 0;

    for (let i = 2; i <= n; i++) {
        fibN = fibNMinus1 + fibNMinus2;
        fibNMinus2 = fibNMinus1;
        fibNMinus1 = fibN;
    }

    return fibN;
};
