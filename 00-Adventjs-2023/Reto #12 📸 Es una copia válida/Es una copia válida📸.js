function checkIsValidCopy(original, copy) {
    const chars = ["#", "+", ":", ".", " "];

    for (let i = 0; i < original.length; i++) {
        if (
            chars.includes(original[i]) &&
            chars.indexOf(original[i]) > chars.indexOf(copy[i])
        ) {
            return false;
        } else if (
            original[i] !== copy[i] &&
            original[i].toLowerCase() !== copy[i] &&
            !chars.includes(copy[i])
        ) {
            return false;
        }
    }
    return true;
}

console.log(checkIsValidCopy(
    'Santa Claus is coming',
    'sa#ta Cl#us i+ comin#'
))// true
console.log(checkIsValidCopy(
    's#nta Cla#s is coming',
    'p#nt: cla#s #s c+min#'
)) // false (por la p inicial)
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')) // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')) // false (hay un # donde no debería)