const prompt = require('prompt-sync')(); 

let numeros = [5, 2, 8, 1, 4];
console.log(numeros);

/*1)*/ console.log(numeros.join(","));

/*2)*/ numeros.reverse();
console.log(numeros);

/*3)*/ let doisPrimeiros = numeros.slice(0, 2);
console.log(doisPrimeiros);

/*4)*/ let nomes = ["Carlos", "Ana", "Pedro", "Bruno"];
nomes.sort();
console.log(nomes);

/*5)*/ let numerosPares = numeros.filter(function(numero) {
    return numero % 2 == 0;
});
console.log(numerosPares);

/*6)*/ let quadrados = numeros.map(function(numero) {
    return numero * numero;
});
console.log(quadrados);

/*7)*/ let soma = numeros.reduce(function(total, numero) {
    return total + numero;
}, 0);
console.log(soma);

/*8)*/ nomes.forEach(function(nome) {
    console.log(nome);
});