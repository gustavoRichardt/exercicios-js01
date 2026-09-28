const prompt = require('prompt-sync')(); 

function ordenarNumeros(array) {

    let arrayNumeros = [];

    for(let i = 0; i < array.length; i++) {
        arrayNumeros.push(array[i]);
    }

    arrayNumeros.sort(function(a, b) {
        return a - b;
    });

    return arrayNumeros;
}

let array = [];

for(let i = 0; i < 5; i++) {
    array.push(parseFloat(prompt("Digite um número: ")));
}

console.log(ordenarNumeros(array));