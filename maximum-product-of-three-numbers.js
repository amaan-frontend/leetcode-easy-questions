function maximumProduct(nums) {
    nums.sort((a, b) => b - a); // Sort the array in descending order
    const n = nums.length;
    const option1 = nums[0] * nums[1] * nums[2]; // Product of three largest elements
    const option2 = nums[0] * nums[n - 1] * nums[n - 2]; // Product of largest and two smallest elements

    return Math.max(option1, option2);
}
                            
