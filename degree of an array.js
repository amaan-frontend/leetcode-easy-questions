
const frequency = {};
    const firstOccurrence = {};
    let maxFrequency = 0;
    let minLength = Infinity;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];

        if (firstOccurrence[num] === undefined) {
            firstOccurrence[num] = i;
        }

        frequency[num] = frequency[num] + 1 || 1;

        if (frequency[num] > maxFrequency) {
            maxFrequency = frequency[num];
        }
    }

    for (const num in frequency) {
        if (frequency[num] === maxFrequency) {
            const length = firstOccurrence[num] !== undefined ? i - firstOccurrence[num] + 1 : 1;
            minLength = Math.min(minLength, length);
        }
    }

    return minLength;
