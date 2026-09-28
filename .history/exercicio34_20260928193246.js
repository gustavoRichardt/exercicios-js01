// 1. Função construtora
function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
}

// 2. Adicionando o método ao protótipo
Produto.prototype.descrever = function() {
    console.log(`${this.nome} custa R$ ${this.preco}`);
};

// 3. Criando uma instância
let livro = new Produto("O Senhor dos Anéis", 80);

// 4. Chamando o método
livro.descrever();