export const reverseBits = (num) => {
    if(!Number.isInteger(num) || num<0) {
        return false;
    }
    return parseInt(num.toString(2).split('').reverse().join(''),2);
};