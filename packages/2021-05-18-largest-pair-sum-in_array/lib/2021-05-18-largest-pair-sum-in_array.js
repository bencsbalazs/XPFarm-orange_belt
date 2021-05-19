export function largestPairSumInArray(array) {
    if (!Array.isArray(array) || array.some(isNaN)) {return false;}
    var sorted = sorting(array);
    return sorted[0] + sorted[1];
}

export const sorting = (arr) => {return arr.sort().reverse();};
