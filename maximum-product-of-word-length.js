 function hasCommonLetters(word1, word2) {
        const set1 = new Set(word1);
        const set2 = new Set(word2);
        for (const char of set1) {
            if (set2.has(char)) {
                return true;
            }
        }
        return false;
    }

    let maxProduct = 0;

    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (!hasCommonLetters(words[i], words[j])) {
                maxProduct = Math.max(maxProduct, words[i].length * words[j].length);
            }
        }
    }

    return maxProduct;
