const prompt = require('prompt-sync')(); 

function juntarArrays(array1, array2) {

    let novoArray = [];

    for(let i = 0; i < array1.length; i++) {
        novoArray.push(array1[i]);
    }

    for(let i = 0; i < array2.length; i++) {
        novoArray.push(array2[i]);
    }

    return novoArray;
}

    let array1 = [];
    let array2 = [];

    let quantidade1 = parseInt(prompt("Quantos números deseja inserir no array 1? "));

    for(let i = 0; i < quantidade1; i++) {
    array1.push(parseFloat(prompt("Digite um número para o array 1: ")));
    }

    let quantidade2 = parseInt(prompt("Quantos números deseja inserir no array 2?"));

    for(let i = 0; i < quantidade2; i++) {
    array2.push(parseFloat(prompt("Digite um número para o array 2: ")));
    }

    console.log(juntarArrays(array1, array2));