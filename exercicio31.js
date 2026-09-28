let dadosPessoais = {
    nome: "Mariana",
    idade: 30
};

let dadosProfissionais = {
    cargo: "Analista de Sistemas",
    empresa: "Tech Corp"
};

let funcionarioCompleto = {
    ...dadosPessoais,
    ...dadosProfissionais
};

console.log(funcionarioCompleto);