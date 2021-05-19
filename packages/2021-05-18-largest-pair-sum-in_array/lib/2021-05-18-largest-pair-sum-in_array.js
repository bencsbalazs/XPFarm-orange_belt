export function largestPairSumInArray(array) {
    if (!Array.isArray(array) || array.some(isNaN)) {return false;}
    var sorted = sorting(array);
    console.log(sorted)
    return sorted[0] + sorted[1];
}

export const sorting = (arr) => {return arr.sort((a,b) => {return a-b;}).reverse();};
