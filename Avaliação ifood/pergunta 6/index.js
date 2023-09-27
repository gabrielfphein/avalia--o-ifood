/*Qual o valor da saída do código abaixo?
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);
a) 0

b) 2

c) 3

d) 4 */

let x = 0;
let a = 0;
let b = -5;

console.log("Valor inicial de x:", x);

if (a > 0) {
    console.log("Entrou no primeiro if");
    if (b < 0) {
        x = x + 5;
        console.log("Entrou no segundo if, x:", x);
    } else if (a > 5) {
        x = x + 4;
        console.log("Entrou no else if, x:", x);
    } else {
        x = x + 3;
        console.log("Entrou no else do primeiro if, x:", x);
    }
} else {
    x = x + 2;
    console.log("Entrou no else do bloco externo, x:", x);
}

console.log("Resultado final de x:", x);