const prompt = require('prompt-sync')(); 

function contarNumeros(array, numero) {

    let contagemArray = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            contagemArray.push(array[i]);
        }
    }

        return contagemArray;
}

 let array = [];

for(let i = 0; i < 5; i++) {
        array.push(parseFloat(prompt("Digite um número: ")));
    }

let numero = parseFloat(prompt("Digite o número de comparação:"));

console.log(contarNumeros(array, numero));