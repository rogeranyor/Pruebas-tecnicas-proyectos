function getIndexsForPalindrome(word) {
    let arrWord = word.split("");
    let auxArr = [];
    let left = "";
    let right = "";
    const middle = Math.floor(word.length / 2);
    const middleUp = Math.ceil(word.length / 2);

    for (const [a] of word.split("").entries()) {
        for (const [b] of word.split("").entries()) {
            auxArr = [...arrWord];
            [auxArr[a], auxArr[b]] = [auxArr[b], auxArr[a]];

            left = auxArr.slice(0, middle).join("");
            right = auxArr.slice(middleUp).reverse().join("");

            if (left === right && a === 0 && b === 0) return [];
            else if (left === right) return [a, b];
        }
    }
    return null;
}

getIndexsForPalindrome('anna') // []
getIndexsForPalindrome('abab') // [0, 1]
getIndexsForPalindrome('abac') // null
getIndexsForPalindrome('aaaaaaaa') // []
getIndexsForPalindrome('aaababa') // [1, 3]
getIndexsForPalindrome('caababa') // null