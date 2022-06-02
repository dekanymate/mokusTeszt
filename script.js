export function megfordit(szoveg) {
    return szoveg.split("").reverse().join("");
}

export function megforditFor(szoveg) {
    let returnString = "";
    for (let index = szoveg.length - 1; index >= 0; index--) {
        returnString += szoveg.charAt(index);
    }
    return returnString;
}