function findErrorNums(nums) {
    const seen = new Set();
    let duplicate, missing;

    for (const num of nums) {
        if (seen.has(num)) {
            duplicate = num;
        }
        seen.add(num);
    }

    for (let i = 1; i <= nums.length; i++) {
        if (!seen.has(i)) {
            missing = i;
            break;
        }
    }

    return [duplicate, missing];
}
                                                                                                                        
