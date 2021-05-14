export function limit(array, limit) {
    if (!Array.isArray(array)) {
        return false;
    }
    return !array.some(isNaN);
}
