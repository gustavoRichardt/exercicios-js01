let livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

// 1. Array com todas as chaves
let chaves = Object.keys(livro);

// 2. Array com todos os valores
let valores = Object.values(livro);

// 3. Array de pares [chave, valor]
let entradas = Object.entries(livro);

// 4. Imprimindo os resultados
console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Entradas:", entradas);