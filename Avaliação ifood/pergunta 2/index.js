//Desafio: Quantidade de Palavras
//Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:

//"façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"
//Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a quantidade de palavras existentes!


function contarPalavras(str) {
    let contagem = 1;

    for (let i = 0; i < str.length; i++) {
       
        if (str.charAt(i) === str.charAt(i).toUpperCase()) {
            contagem++;
        }
    }

    return contagem;
}


const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
console.log(contarPalavras(frase)); 
 // Deve imprimir 12
