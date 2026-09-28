let usuario = {
    nome: "Carlos",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    }
};

// Imprimindo a frase acessando a propriedade aninhada (endereco.cidade e endereco.rua)
console.log(`O usuário mora em ${usuario.endereco.cidade}, na ${usuario.endereco.rua}.`);