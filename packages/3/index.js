export const longWords = (sentence, n) {
    var longer = [];
    var sent  = sentence.split(' ');
    
    for(var i=0; i< sent.length; i++) {
        if( sent[i].length > n) {
        longer.push(sent[i])
        }
    }
    return longer
}
