function decode(message) {
    let pila = [];
    let resultado = '';

    for (let caracter of message) {
        if (caracter === '(') {
            pila.push(resultado);
            resultado = '';

        } else if (caracter === ')') {
            resultado = resultado.split('').reverse().join('');

            resultado = pila.pop() + resultado;
        } else {
            resultado += caracter;
        }
    }

    return resultado;
}

const a = decode('hola (odnum)')
console.log(a) // hola mundo

const b = decode('(olleh) (dlrow)!')
console.log(b) // hello world!

const c = decode('sa(u(cla)atn)s')
console.log(c) // santaclaus

// Paso a paso:
// 1. Invertimos el anidado -> sa(ualcatn)s
// 2. Invertimos el que queda -> santaclaus