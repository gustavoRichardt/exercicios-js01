let lanche = {
    nome: "X-Burguer",
    preco: 15,
    ingredientes: ["pão", "hambúrguer", "queijo", "alface"],

    frase: function() {
        console.log(`O lanche ${this.nome} custa R$ ${this.preco}`)
    }
};

lanche.frase();