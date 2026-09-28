const prompt = require('prompt-sync')(); 

function filtrarNumeros(array, numero) {

    let filtroArray = [];

    for(let i = 0; i < array.length; i++) {
        if (array[i] > numero) {
            filtroArray.push(array[i]);
        }
    }

        return filtroArray;

        for(let i = 0; i < array.length; i++) {
        array.push(parseFloat(prompt("Digite um número: ")));
    }
}