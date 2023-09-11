
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    let maxIndex = 0;
    let maxNum = nums[0];

    // Find the maximum element and its index
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > maxNum) {
            maxNum = nums[i];
            maxIndex = i;
        }
    }

    // Check if the condition is satisfied
    for (let i = 0; i < nums.length; i++) {
        if (i !== maxIndex && nums[i] * 2 > maxNum) {
            return -1;
        }
    }

    return maxIndex;
};
