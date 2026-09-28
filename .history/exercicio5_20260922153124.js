const prompt = require('prompt-sync')(); 

let frutas = ["maçã", "banana", "laranja"];

/*1)*/ console.log(frutas[1]);

/*2)*/ frutas.push("manga");
console.log(frutas);

/*3)*/ frutas.shift();
console.log(frutas);

/*4)*/ console.log(frutas.length);

/*5)*/ for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

/*6)*/ frutas.forEach(function(fruta) {
    console.log(fruta);
});

/*7)*/ let tamanhoFrutas = frutas.map(function(fruta) {
    return fruta.length;
});
console.log(tamanhoFrutas);

/*8)*/ let frutasMaiores = frutas.filter(function(fruta) {
    return fruta.length > 5;
});
console.log(frutasMaiores);