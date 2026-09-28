let configuracoes = {
    tema: "dark",
    idioma: "pt-br"
};

let novasConfiguracoes = { ...configuracoes };

novasConfiguracoes.tema = "light";

console.log("Objeto original:", configuracoes);
console.log("Objeto alterado:", novasConfiguracoes);