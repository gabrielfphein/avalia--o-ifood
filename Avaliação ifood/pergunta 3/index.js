//Desafio: Número Solitário
//Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números fornecido. Para resolver, crie uma função que recebe um array com os seguintes números:

//[12, 17, 15, 19, 22, 17, 19, 12]
//E retorne os que não estiverem repetidos.

function encontrarSolitarios(nums) {
    const contador = {};

    
    for (let num of nums) {
        if (contador[num]) {
            contador[num]++;
        } else {
            contador[num] = 1;
        }
    }

    const solitarios = [];

    
    for (let num in contador) {
        if (contador[num] === 1) {
            solitarios.push(parseInt(num));
        }
    }

    return solitarios;
}

const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
console.log(encontrarSolitarios(numeros)); 
 // Deve imprimir [15, 22]