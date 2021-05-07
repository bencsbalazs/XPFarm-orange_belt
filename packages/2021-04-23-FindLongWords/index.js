export const longWords = (sentence, n) => {
    let filteredWords = [];
    if (typeof(sentence) != "string") {
        return false;
    }
    if (n<1) {
        return false;
    }
    sentence.split(" ").forEach((word)=>{
        if (word.length >= n) {
            filteredWords.push(word);
        }
    });
    return filteredWords;
};
