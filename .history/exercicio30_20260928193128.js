let configuracoes = {
    tema: "dark",
    idioma: "pt-br"
};

// Criando uma cópia do objeto
let novasConfiguracoes = { ...configuracoes };

// Alterando a propriedade apenas na cópia
novasConfiguracoes.tema = "light";

console.log("Objeto original:", configuracoes);
console.log("Objeto alterado:", novasConfiguracoes);