export function buildATrain(train) {
    let result;
    const METALS = {"A": 15, "B": 10, "C": 7, "D": 8, "_": 5};
    if (!Object.keys(METALS).includes(train.split('')[0]) || !train.split("").includes("_")) return false;
    train.split('').forEach(c => {
        result += !!Object.keys(METALS).find(train => train === c) ? METALS[c] : 0;
     });
    return result;
}
