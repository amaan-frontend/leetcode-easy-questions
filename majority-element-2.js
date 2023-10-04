/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  let majorityElement = null;
  let count = 0;

  // Find a candidate majority element.
  for (const num of nums) {
    if (num === majorityElement) {
      count++;
    } else if (count === 0) {
      majorityElement = num;
      count = 1;
    } else {
      count--;
    }
  }

  // Verify that the candidate majority element is actually the majority element.
  count = 0;
  for (const num of nums) {
    if (num === majorityElement) {
      count++;
    }
  }

  if (count > nums.length / 3) {
    return majorityElement;
  } else {
    return null;
  }
}

