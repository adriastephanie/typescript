"use strict";
// permite passar parametros infinitos do jeito mais limpo
//function somarRenda(mes1: number, mes2: number, mes3: number): number {
//return mes1 + mes2 + mes3;
//}
function somarRenda(...meses) {
    return meses.reduce((rendaTotal, rendaAtual) => rendaTotal + rendaAtual, 0);
}
console.log(somarRenda(10, 5, 15));
