const prompt = require('prompt-sync')(); 

let frutas = ["Maçã", "Banana", "Laranja"];
console.log(frutas);

/*1)*/ console.log(frutas[1]);

/*2)*/ frutas.push("Morango");
console.log(frutas);

/*3)*/ frutas.shift();
console.log(frutas);

/*4)*/ let numeros = [1, 2, 3];
numeros.push(4);
console.log(numeros);

/*5)*/ numeros.pop();
console.log(numeros);

/*6)*/ numeros.unshift(0);
console.log(numeros);

/*7)*/ numeros.shift();
console.log(numeros);

/*8)*/ let frutas2 = ["Manga", "Abacaxi", "Melancia"];
let todasFrutas = frutas.concat(frutas2);
console.log(todasFrutas);

/*9)*/ let duasFrutas = todasFrutas.slice(0, 2);
console.log(duasFrutas);

/*10)*/ todasFrutas.splice(1, 1);
console.log(todasFrutas);

/*11)*/ console.log(todasFrutas.indexOf("Banana"));

/*12)*/ let frutasM = todasFrutas.filter(function(fruta) {
    return fruta.startsWith("M");
});
console.log(frutasM);

/*13)*/ let dobro = numeros.map(function(numero) {
    return numero * 2;
});
console.log(dobro);

/*14)*/ todasFrutas.forEach(function(fruta) {
    console.log(fruta);
});