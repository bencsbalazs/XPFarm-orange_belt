export function Imeverywhere(word) {
    if (typeof(word)!= "string" || /^[a-zI]/.test(word) || word.replace(/[^aeiou]/ig,'').length*2>=word.length) return 'Invalid word';
    return 'i'+word;
}
