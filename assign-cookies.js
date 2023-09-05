/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    // Sort the arrays in ascending order.
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let contentChildren = 0;
    let i = 0; // Index for greed factors
    let j = 0; // Index for cookie sizes

    while (i < g.length && j < s.length) {
        if (s[j] >= g[i]) {
            // If the current cookie size can satisfy the current child's greed factor, assign the cookie to the child.
            contentChildren++;
            i++;
        }
        j++; // Move to the next cookie, regardless of whether it was assigned or not.
    }

    return contentChildren;
};
