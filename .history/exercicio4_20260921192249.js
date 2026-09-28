const prompt = require('prompt-sync')(); 

function criarArray(numero) {

    let arrayNumeros = [];

    for(let i = 1; i <= numero; i++) {
        arrayNumeros.push(i);
    }

    return arrayNumeros;
}

let numero = parseInt(prompt("Digite um número: "));

console.log(criarArray(numero));