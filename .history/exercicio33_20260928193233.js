let veiculo = {
    rodas: 4
};

let carro = Object.create(veiculo);
carro.marca = "Ford";

// 3. Imprimindo a propriedade própria
console.log(carro.marca);

// 4. Imprimindo a propriedade herdada do protótipo
console.log(carro.rodas);