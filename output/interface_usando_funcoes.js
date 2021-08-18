"use strict";
let primSoma;
primSoma = (numero1, numero2) => {
    return numero1 + numero2;
};
console.log(primSoma(3, 6));
let calculadora;
function adicao(a, b) {
    return a + b;
}
const subtracao = (n1, n2) => n1 - n2;
calculadora = {
    dividir: (numero1, numero2) => {
        return numero1 / numero2;
    },
    multiplicar: function (numero1, numero2) {
        return numero1 * numero2;
    },
    somar: adicao,
    subtrair: subtracao,
};
