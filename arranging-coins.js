/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {

    let k = 1;
    while (k * (k + 1) / 2 <= n) {
        k++;
    }
    return k - 1;


};
