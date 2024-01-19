function organizeGifts(gifts) {
    const regex = /(\d+)([a-z])/g;
    let result = "";
    let matches;
    let letter;
    let match;
    while ((match = regex.exec(gifts)) !== null) {
        matches = parseInt(match[1]);
        letter = match[2];

        result += `[${letter}]`.repeat(Math.floor(matches / 50));
        matches -= 50 * Math.floor(matches / 50);

        result += `{${letter}}`.repeat(Math.floor(matches / 10));
        matches -= 10 * Math.floor(matches / 10);

        if (matches % 10 > 0) result += "(" + letter.repeat(matches % 10) + ")";
    }
    return result;
}

const result1 = organizeGifts(`76a11b`)
console.log(result1)
// '[a]{a}{a}(aaaaaa){b}(b)'

/* Explicación:

  76a: 76 regalos tipo 'a' se empaquetarían en 7 cajas y sobrarían 6 regalos,
   resultando en 1 palé [a] (por las primeras 5 cajas),
    2 cajas sueltas {a}{a} y una bolsa con 6 regalos (aaaaaa)

  11b: 11 regalos tipo 'b' se empaquetarían en 1 caja y sobraría 1 regalo, 
  resultando en 1 caja suelta {b} y una bolsa con 1 regalo (b)
  */