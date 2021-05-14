export function limit(array, limit) {
    if (!Array.isArray(array) || array.some(isNaN)) {
        return false;
    }

    if (!Number.isInteger(limit)){
        return "Error";
    }
    
}
