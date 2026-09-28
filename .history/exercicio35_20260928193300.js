// 1. Função construtora
function Guerreiro(nome) {
    this.nome = nome;
    this.vida = 100;
}

// 2. Adicionando o método ao protótipo
Guerreiro.prototype.atacar = function() {
    console.log(`${this.nome} está atacando!`);
};

// 3. Criando as instâncias
let guerreiro1 = new Guerreiro("Arthur");
let guerreiro2 = new Guerreiro("Lancelot");

// 4. Verificando o uso compartilhado do método
guerreiro1.atacar();
guerreiro2.atacar();