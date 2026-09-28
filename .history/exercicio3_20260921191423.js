const prompt = require('prompt-sync')(); 

function contagem(array, numero) {

    let contagemArray = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] == numero) {
            contagemArray.push(array[i]);
        }
    }

        return filtroArray;
}

 let array = [];

for(let i = 0; i < 5; i++) {
        array.push(parseFloat(prompt("Digite um número: ")));
    }

let numero = parseFloat(prompt("Digite o número de comparação:"));

console.log(filtrarNumeros(array, numero));