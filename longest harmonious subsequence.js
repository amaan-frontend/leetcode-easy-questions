/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
    let numCounts = new Map();

    // Count the occurrences of each number in the array
    for (let num of nums) {
        if (numCounts.has(num)) {
            numCounts.set(num, numCounts.get(num) + 1);
        } else {
            numCounts.set(num, 1);
        }
    }

    let maxLen = 0;

    // Iterate through the unique numbers in the array
    for (let num of numCounts.keys()) {
        if (numCounts.has(num + 1)) {
            let len = numCounts.get(num) + numCounts.get(num + 1);
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
};
