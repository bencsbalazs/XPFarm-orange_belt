
export function nbYear(p0, percent, aug, p) {
    if (p0>p || typeof(percent) != "number" || typeof(aug) != "number") {return false;}
    for(var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
    return y
}
