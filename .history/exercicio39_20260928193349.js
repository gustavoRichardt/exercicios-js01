// 1. Criando o objeto
let configuracao = {
    status: "ativo"
};

// 2. Congelando o objeto
Object.freeze(configuracao);

// 3. Tentando modificar e adicionar propriedades (serão ignoradas silenciosamente ou gerarão erro em strict mode)
configuracao.status = "inativo";
configuracao.versao = 1.0;

// 4. Confirmando que o objeto não sofreu alterações
console.log(configuracao);