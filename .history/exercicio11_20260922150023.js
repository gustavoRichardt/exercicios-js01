const prompt = require('prompt-sync')(); 

function criarMatriz(linhas, colunas) {

    let matriz = [];

    for (let i = 0; i < linhas; i++) {
        matriz.push(linhas);

        let linha = [];

        for (let i = 0; i < colunas; i++) {
            linha.push(Math.floor(Math.random() * 10));
        }

        matriz.push(linha)
    }

    return matriz;
}

let linhas = parseInt(prompt("Quantas linhas deseja inserir? "));
let colunas = parseInt(prompt("Quantas colunas deseja inserir? "))