const prompt = require('prompt-sync')(); 

 function calcularMedia(numeros) {

    let soma = 0;

    for(let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
    }

    return soma / numeros.length;
   
 }

  let numeros = [];

  for (let i = 0; i < 5; i++) {
    numeros.push(parseFloat(prompt("Digite um número: ")));
}

console.log(calcularMedia(numeros));