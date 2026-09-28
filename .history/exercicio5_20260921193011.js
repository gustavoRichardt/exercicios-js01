const prompt = require('prompt-sync')(); 

function ordenarNumeros (array, numero) {

    let arrayNumeros = [];

    for(let i = 0; i < array.length; i++) {
        array.push(arrayNumeros[i]);
    }

    arrayNumeros.sort(function(a, b) {
        return a - b;
    });

    return arrayNumeros;
}

    let array = [];

    arrayNumeros.sort();
    console.log(ordenarNumeros(array, numero));