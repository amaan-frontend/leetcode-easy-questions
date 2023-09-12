/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    const commonStrings = [];
    const indexSumMap = new Map();
    let minIndexSum = Infinity;

    for (let i = 0; i < list1.length; i++) {
        for (let j = 0; j < list2.length; j++) {
            if (list1[i] === list2[j]) {
                const indexSum = i + j;
                if (indexSum < minIndexSum) {
                    minIndexSum = indexSum;
                    commonStrings.length = 0; // Reset the array
                }
                if (indexSum === minIndexSum) {
                    commonStrings.push(list1[i]);
                }
            }
        }
    }

    return commonStrings;
}

