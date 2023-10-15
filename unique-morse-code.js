function uniqueMorseRepresentations(words) {
    const morseCodes = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    
    function wordToMorse(word) {
        let morse = '';
        for (let char of word) {
            morse += morseCodes[char.charCodeAt(0) - 'a'.charCodeAt(0)];
        }
        return morse;
    }
    
    const transformations = new Set();
    
    for (let word of words) {
        transformations.add(wordToMorse(word));
    }
    
    return transformations.size;
}

