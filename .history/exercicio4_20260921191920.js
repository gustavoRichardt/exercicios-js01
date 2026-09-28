const prompt = require('prompt-sync')(); 

function criarArray(array, numero) {

    let arrayNumeros = 0;

    for(let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            contador++;
        }
    }

        return contador;
}

 let array = [];

for(let i = 0; i < 5; i++) {
        array.push(parseFloat(prompt("Digite um número: ")));
    }

let numero = parseFloat(prompt("Digite o número de comparação:"));

console.log(contarNumeros(array, numero));