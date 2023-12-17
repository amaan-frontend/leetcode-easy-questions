
var answerQueries = function (nums, queries) {
    nums = nums.sort((a, b) => a - b);
    const output = [];

    for (let i = 0; i < queries.length; i++) {
        const target = queries[i];
        let sum = 0;
        for (let j = 0; j < nums.length; j++) {
            sum += nums[j];
            if (sum > target) {
                output.push(j)
                break;
            }
        }
        if (output[i] === undefined) output.push(nums.length);
    }

    return output;
};
