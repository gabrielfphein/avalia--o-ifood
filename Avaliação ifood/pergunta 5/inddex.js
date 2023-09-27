/*Qual é o resultado da expressão booleana abaixo?
!(true && false) || (false && true)
a. true

b. null

c. false

d. NaN

e. undefined*/


console.log("true && false:", true && false);               // false
console.log("!(true && false):", !(true && false));         // true
console.log("false && true:", false && true);               // false
console.log("(false && true):", (false && true));           // false
console.log("Resultado final:", !(true && false) || (false && true)); // true
