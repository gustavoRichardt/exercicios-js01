const prompt = require('prompt-sync')(); 

let array = [];

let quantidade = parseInt(prompt("Quantas idades deseja inserir? "));

for(let i = 0; i < quantidade; i++) {

    array.push(parseInt(prompt("Digite a idade: ")));

}

let verificarIdade = array.every(function(idade) {

    return idade > 18;

});

console.log("verificarIdade);