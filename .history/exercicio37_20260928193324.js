let carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2022
};

// Percorrendo as chaves do objeto
for (let chave in carro) {
    console.log(`${chave}: ${carro[chave]}`);
}