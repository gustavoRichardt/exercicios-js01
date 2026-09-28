let dadosPessoais = {
    nome: "Mariana",
    idade: 30
};

let dadosProfissionais = {
    cargo: "Analista de Sistemas",
    empresa: "Tech Corp"
};

// Mesclando ambos os objetos em um só
let funcionarioCompleto = {
    ...dadosPessoais,
    ...dadosProfissionais
};

console.log(funcionarioCompleto);