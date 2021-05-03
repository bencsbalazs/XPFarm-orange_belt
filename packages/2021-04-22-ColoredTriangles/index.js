export function triangles(userString) {
    if (userString == null) {
        return ""
    }

    if (userString.length == 1) {
        return userString;
    }
    
    let nextRow = "";
    for (let i = 0; i < userString.length - 1; i++) {
        if (userString[i] == userString[i + 1]) {
            nextRow += userString[i];
        } else {
            nextRow += "RGB".replace(userString[i], "").replace(userString[i + 1], "");
        }
    }
    
    if (nextRow.length > 1) {
        return triangles(nextRow);
    }
    
    return nextRow;
}