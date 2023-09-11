/**
 * @param {number[]} aliceSizes
 * @param {number[]} bobSizes
 * @return {number[]}
 */
var fairCandySwap = function (aliceSizes, bobSizes) {
    function candyExchange(aliceSizes, bobSizes) {
        const totalAlice = aliceSizes.reduce((acc, val) => acc + val, 0);
        const totalBob = bobSizes.reduce((acc, val) => acc + val, 0);

        const targetTotal = (totalAlice + totalBob) / 2;

        for (let i = 0; i < aliceSizes.length; i++) {
            for (let j = 0; j < bobSizes.length; j++) {
                const newAliceTotal = totalAlice - aliceSizes[i] + bobSizes[j];
                const newBobTotal = totalBob - bobSizes[j] + aliceSizes[i];

                if (newAliceTotal === targetTotal && newBobTotal === targetTotal) {
                    return [aliceSizes[i], bobSizes[j]];
                }
            }
        }
    }
}

