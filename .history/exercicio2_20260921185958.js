const prompt = require('prompt-sync')(); 

function filtrarNumeros(array, numero) {

    let filtroArray = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] > numero) {
            filtroArray.push(array[i]);
        }
    }

        return filtroArray;
}

 let array = [];

for(let i = 0; i < array.length; i++) {
        array.push(parseFloat(prompt("Digite um número: ")));
    }

let numero = parseFloat(prompt("Digite o número de comparação:"));

console.log(filtrarNumeros(array, numero));