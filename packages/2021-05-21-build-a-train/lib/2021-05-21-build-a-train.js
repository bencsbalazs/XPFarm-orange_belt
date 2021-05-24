export function buildATrain(train) {
    
    const METALS = {"A": 15, "B": 10, "C": 7, "D": 8, "_": 5};
    if (!Object.keys(METALS).includes(train.split('')[0]) || !train.split("").includes("_")) return false;
    
}
