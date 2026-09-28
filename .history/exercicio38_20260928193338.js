let livro = {
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328
};

let chaves = Object.keys(livro);

let valores = Object.values(livro);

let entradas = Object.entries(livro);

// 4. Imprimindo os resultados
console.log("Chaves:", chaves);
console.log("Valores:", valores);
console.log("Entradas:", entradas);