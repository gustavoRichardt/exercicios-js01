let usuario = {
    nome: "Carlos",
    endereco: {
        rua: "Rua das Flores",
        numero: 123,
        cidade: "São Paulo"
    }
};

console.log(`O usuário mora em ${usuario.endereco.cidade}, na ${usuario.endereco.rua}.`);