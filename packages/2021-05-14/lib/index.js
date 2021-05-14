export function limit(array, limit) {
    if (!Array.isArray(array)) {
        return false;
    }
    if (array.some(isNaN)){
        return false;
    }
    if (!Number.isInteger(limit)){
        return "Error";
    }
    
}
